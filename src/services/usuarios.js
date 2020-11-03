import http from './config.js'

export default {

    Registrar:(user) => {
        return http.post('user/register_user', user)
    },
    
    Login:(login) => {
        return http.post('user/login', login)
    },

    Validar:(tk) => {
        return http.get('user/validate_session', {headers: {'authorization': `Bearer ${tk}`}})
    },

    listarPostagemUsuario:(id) => {
        return http.get(`/user/list_postages/${id}`)
    }
}