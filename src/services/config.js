import axios from 'axios'

const port = process.env.PORT || '8000'

const http = axios.create({
    baseURL: '' + port,
})

export default http 