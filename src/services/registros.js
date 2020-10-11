import { http } from './config'

export default{

    Registrar:(user) => {
        return http.post('user/register_user', user)
    }
}