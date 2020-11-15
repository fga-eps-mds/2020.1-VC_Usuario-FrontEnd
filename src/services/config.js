import axios from 'axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

const httpNews = axios.create({
    baseURL: process.env.VUE_APP_API_URL_NEWS 
});

export default { http, httpNews }; 