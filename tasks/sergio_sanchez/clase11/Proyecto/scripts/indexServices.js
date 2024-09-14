import usuario from './index.js'

function validation(user_login, passwors_login){
    return (user_login === usuario.user && passwors_login === usuario.contraseña) ? 1 : 0;
    
}
export default {
    validation
}