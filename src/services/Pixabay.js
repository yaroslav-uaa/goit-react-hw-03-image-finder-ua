import axios from 'axios';

axios.defaults.baseURL = `https:pixabay.com/api/`;

let ApiKey = `19822341-38023a333dc0ee1aeedcaef47`;
const perPage = 12;

const fetchImg = ({ query = '', currentPage = 1 }) => {
  const url = `?q=${query}&page=${currentPage}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  return axios.get(url).then(({ data }) => {
    return data.hits;
  });
};

export default fetchImg;
