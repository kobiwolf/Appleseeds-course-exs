import axios from 'axios';

let newUrl = () =>
  axios.create({
    baseURL: `https://605af4e427f0050017c05b1f.mockapi.io`,
  });
export default newUrl();
