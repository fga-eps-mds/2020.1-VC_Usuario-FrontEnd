import { http } from './config'

export default{

    listarPostagem:() => {
        return http.get('postage/list_common')
    },

    criarPostagem:(postagem) => {
        return http.post('postage/create_anon', postagem)
    }
}