import { http } from './config'

export default{

    Registrar:(user) => {
        return http.post('register_user', user)
    }
}