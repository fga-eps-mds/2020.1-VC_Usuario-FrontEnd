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

    DeletarContaUsuario:(usuario) => {
        return http.delete(`user/delete/${usuario.id}`, {params: {password: usuario.password}})
    },

    AtualizarUsuario:(id) => {
        console.log(id)
        return http.put(`user/update/${id}`)
    }
}