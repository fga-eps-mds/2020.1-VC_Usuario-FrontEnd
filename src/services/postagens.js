import http from './config.js'

export default {

    listarPostagem:() => {
        return http.get('postage/list_common')
    },

    criarPostagemAnonima:(postagem) => {
        return http.post('postage/create_anon', postagem)
    },

    criarPostagem:(postagem) => {
        return http.post('postage/create_common', postagem)
    },

    listarUmaPostagem:(id) => {
        return http.get(`postage/list_one/${id}`)
    },

    apoiarUmaPostagem:(upsAtributos) => {
        return http.put(`/ups/support_postage`, upsAtributos)
    }
}