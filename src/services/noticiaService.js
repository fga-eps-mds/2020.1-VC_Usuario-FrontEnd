import httpNews from './configNews.js'

export default{
    listarNoticias:() => {
        return httpNews.get('/news')
    }
}