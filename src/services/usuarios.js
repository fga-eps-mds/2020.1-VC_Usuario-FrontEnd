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

    DeletarContaUsuario:(id) => {
        return http.delete(`user/delete/${id}`)
    },

    ValidaSenhaUsuario:(usuario) => {
        return http.post(`user/validade_password/${usuario.id}`, usuario.password)
    },

    AtualizarUsuario:(usuario) => {
        return http.put(`user/update/${usuario.id}`, usuario.data)
    }
}