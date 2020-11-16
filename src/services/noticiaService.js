import httpNews from './config'

export default{
    listarNoticias:() => {
        return httpNews.get('/news')
    }
}