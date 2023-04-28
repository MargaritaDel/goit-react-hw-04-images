import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '34025093-cc2dd49ea388fe86622ccaf7b';
const PER_PAGE = 12;

async function fetchImagesWithQuery(searchQuery, page) {
  const trimmedQuery = searchQuery.trim();
  if (trimmedQuery) {
    const response = await axios.get(
      `${URL}?q=${trimmedQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );
    if (!response.status) {
      throw new Error(response.status);
    }
    return response.data;
  }
}

export default fetchImagesWithQuery;