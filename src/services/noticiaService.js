import httpNews from './configNews.js'

export default{

    listarNoticias:() => {
        return httpNews.get('/news')
    },

    listarUmaNoticia:(id) => {
        return httpNews.get(`/news/${id}`)
    }
}