import { MyLogin } from './my_login.js';
import  {MyDatos}  from './my_datos.js';
import { MyMovimientos } from './my_movimientos.js'

window.customElements.define('my-login', MyLogin);
window.customElements.define('my-datos', MyDatos);
window.customElements.define('my-movimientos', MyMovimientos);

export default {
    user: 'sergio',
    nombre: 'Sergio',
    apellidos: 'sanchez',
    contraseña: '123123',
    no_cuenta: 1234123,
    saldo: 15892,
    no_tarjeta: 3254523, 
}