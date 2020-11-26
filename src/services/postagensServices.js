import http from './configServices.js'

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

    listarUmaPostagemLogado:(postage_id, user_id) => {
        console.log(postage_id)
        console.log(user_id)
        return http.get(`postage/list_one_logged/${postage_id}/${user_id}`)
    },

    apoiarUmaPostagem:(upsAtributos) => {
        return http.put(`/ups/support_postage`, upsAtributos)
    },

    comentarUmaPostagem:(upcAtributos) => {
        return http.post(`/upc/comment_postage`, upcAtributos)
    },

    listarPostagensUsuarioLogado:(idDoUsuario) => {
        return http.get(`postage/list_all_with_UPS/${idDoUsuario}`)
    },

    editarUmaPostagem:(postagem) => {
        return http.put('/postage/update_one', postagem)
    },

    excluirUmaPostagem:(postagem) => {
        return http.put('/postage/delete_one', postagem)
    },

    listarPorCategoria:(categoria) => {
        return http.get('postage/list_by_category', {params: {categoria: categoria}})
    }
}