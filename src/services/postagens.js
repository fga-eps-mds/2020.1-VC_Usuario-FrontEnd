import { http } from './config'

export default{

    listarPostagem:() => {
        return http.get('postagens')
    },

    criarPostagem:(postagem) => {
        return http.post('postage/create_anon', postagem)
    }
}