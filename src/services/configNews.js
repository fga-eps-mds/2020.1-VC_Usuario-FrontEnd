import axios from 'axios'

const httpNews = axios.create({
    baseURL: process.env.VUE_APP_API_URL_NEWS, 
    headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'X-Requested-With': 'XMLHttpRequest'
  	}
});

export default httpNews; 