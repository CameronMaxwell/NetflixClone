import axios from 'axios';

/** Origional url for making requests to the movie database */
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});


export default instance;