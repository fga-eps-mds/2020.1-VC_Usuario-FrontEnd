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

    MudarSenha:(dados) => {
        return http.put(`user/change_password/${dados.id}`, dados.password)
    },

    AtualizarUsuario:(usuario) => {
        console.log(usuario.novaSenha)
        return http.put(`user/update/${usuario.id}`, usuario.data)
    }
}