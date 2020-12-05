import httpNews from './configNews.js'

export default{

    listarNoticias:() => {
        return httpNews.get('/posts/2')
    },

    // listarUmaNoticia:(id) => {
    //     return httpNews.get(`/news/${id}`)
    // }
}