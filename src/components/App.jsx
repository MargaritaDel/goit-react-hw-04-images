
import {  useState, useEffect, useCallback } from 'react';
import fetchImagesWithQuery from 'services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import {Button} from './Button/Button';
import {Loader} from './Loader/Loader';




const App = () => {
  const [images, setImages ] = useState([]);
  const [query, setQuery ] = useState('');
  const [page, setPage ] = useState(0);
  const [isLoading, setLoading ] = useState(false);

 

  const uploadImages = useCallback(async () => {
    setLoading(true);

    try {
      const { totalHits, hits } = await fetchImagesWithQuery(query, page);
      if (!totalHits) {
        throw new Error('No data');
      }

      setImages(prevImages => [...prevImages, ...hits]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [query, page] );

 const getSearchQuery = searchQuery => {
    if (query !== searchQuery) {
      setQuery(searchQuery);
      setImages([]);
      setPage(1);
    }
  };

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (page !== 0) {
      uploadImages();
    }
  }, [page, query, uploadImages]);

  
  
    const isShowGallery = images.length > 0 && query;
    const isShowButton = isShowGallery && !isLoading && !(images.length % 12);
    return (
      <>
        <Searchbar onSubmit={getSearchQuery} />
        {isShowGallery && <ImageGallery images={images} page={page} />}
        {isShowButton && <Button onClick={nextPage} />}
        {isLoading && <Loader />}
      </>
    );
  }
export default App 