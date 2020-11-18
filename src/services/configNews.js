import axios from 'axios'

const httpNews = axios.create({
    baseURL: process.env.VUE_APP_API_URL_NEWS, 
});

export default httpNews; 