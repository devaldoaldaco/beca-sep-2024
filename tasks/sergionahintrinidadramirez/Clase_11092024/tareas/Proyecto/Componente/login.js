import { UsuarioBBVA } from "../Clases/UsuarioBBVA.js";
import { Banco } from "../Clases/Banco.js"
import { Movimientos } from "../Clases/Movimientos.js";
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.14.0/+esm';
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.promesaValidar = (conError) => {
            return new Promise((resolve, reject) => {
                Swal.fire({
                    title: "Validando tu Información",
                    allowOutsideClick: false,
                    timerProgressBar: true,
                    backdrop: `
                    rgba(0,0,60,0.4)
                    no-repeat
                  `,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });
                setTimeout(() => {
                    if (conError) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Hubo un error al validar tu usuario',
                        });
                        reject(new Error("Error en validar"));
                    } else {
                        resolve("Validacion exitosa");
                    }
                }, 5000);
            });
        };
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('input[type="submit"]').addEventListener('click', this.validarUsuario.bind(this));  // Escuchar el evento submit
        document.title = "BBVA-Login"
    }

    validarUsuario(event) {
        event.preventDefault();

        const usuarioInput = this.shadowRoot.querySelector("input[name='usuario']").value;
        const passwordInput = this.shadowRoot.querySelector("input[name='password']").value;

        // Validación
        if (usuarioInput === "sergio.trinidad" && passwordInput === "root") {
            console.log(`Bienvenido ${usuarioInput}`);
            // IMPLEMENTACION DE PROMESA
            this.promesaValidar(false).then(
                (mensaje) => {
                    console.log(mensaje);
                    // Crear el usuario
                    const user = new UsuarioBBVA("Sergio N Trinidad", "1563393264", 3000, "4152314147732245");
                    user.ocultardatosSencibles();
                    //notificacion
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Inicio de sesion Exitoso",
                        text: `Bienvenido ${user.nombre}`
                    });

                    // Relación con banco
                    const bbva = new Banco(user);

                    // Generar movimientos
                    const movimientos = [
                        new Movimientos('SPEI enviado Santander', 'Transferencia bancaria', 1200),
                        new Movimientos('Pago nómina', 'Movimiento BBVA', 4000),
                        new Movimientos('Pago a cuenta de terceros', 'Movimiento BBVA', 350),
                        new Movimientos('SPEI enviado Nu México', 'Transferencia bancaria', -1000),
                        new Movimientos('SPEI enviado STP', 'Transferencia bancaria', -219)
                    ];

                    movimientos.forEach(mov => bbva.agregarMovimiento(mov))
                    console.log(bbva);

                    // bbva.movimiento.forEach(mov=>{
                    //     console.log(`Tipo de Movimiento: ${mov.tipoMovimiento}, Tipo de Pago: ${mov.tipoPago}, Importe: $${mov.importe}`);
                    // })
                    this.envioDetails(bbva)
                    this.mostrarDashboard(bbva);
                })
                .catch(
                    (error) => {
                        console.error(error);
                    })
        } else {
            console.log("No se encontró usuario");
        }
    }

    ocultarLogin() {
        this.style.display = 'none';
        document.title = "Dashboard BBVA"
    }

    mostrarDashboard(banco) {
        const dashboard = document.querySelector('bbva-dashboard');

        const shadow = dashboard.shadowRoot;
        if (shadow) {
            shadow.querySelector('#nombre-usuario').textContent = banco.usuario.nombre;
            shadow.querySelector('#cuenta').textContent = `Número de cuenta: ${banco.usuario.cuenta}`;
            shadow.querySelector('#saldo').textContent = `Saldo: $${banco.usuario.saldo}`;
            shadow.querySelector('#tarjeta').textContent = banco.usuario.tarjeta;

            // Mostrar el dashboard
            dashboard.style.display = 'block';
            //Oculta el login
            this.ocultarLogin();
            console.log("Ya aparece el dashboard")


        } else {
            console.log("No se encontró el shadowRoot en el componente bbva-dashboard");
        }

    }

    actualizarMovimientos(movimientos, shadow) {
        const lista = shadow.querySelector("#lista-movimientos");
        lista.innerHTML = '';

        // Iterar sobre los movimientos y agregarlos a la lista
        movimientos.forEach((movimiento) => {
            const li = document.createElement('li');
            li.classList.add('movimiento-item');
            li.innerHTML = `
            <div class="movimiento-info">
                <span class="tipo-movimiento">${movimiento.tipoMovimiento}</span>
                <span class="tipo-pago">${movimiento.tipoPago}</span>
            </div>
            <span class="importe">$${movimiento.importe}</span>
        `;
            li.addEventListener('click', () => {
                Swal.fire({
                    title: 'Detalles del Movimiento',
                    html: `
                        <div style="font-family: Arial, sans-serif; font-size: 16px;">
                            <div style="margin-bottom: 10px;">
                                <strong>Beneficiario:</strong> Mario Arturo Sanchez
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong>Banco:</strong> ****
                            </div>

                            <div style="margin-bottom: 10px;">
                                <strong>Tipo de Movimiento:</strong> ${movimiento.tipoMovimiento}
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong>Tipo de Pago:</strong> ${movimiento.tipoPago}
                            </div>
                            <div style="margin-bottom: 10px;">
                                <strong>Importe:</strong> $${movimiento.importe}
                            </div>
                        </div>
                    `,
                    icon: 'info',
                    confirmButtonText: 'Aceptar',
                   
                });
            });
            lista.appendChild(li);
        });
    }

    envioDetails(banco) {
        const details = document.querySelector('bbva-details');
        const shadow = details.shadowRoot;

        if (shadow) {
            // Actualizar los detalles de la tarjeta
            shadow.querySelector('#det-tarjeta').textContent = banco.usuario.tarjeta;
            shadow.querySelector('#det-cuenta').textContent = banco.usuario.cuenta;
            shadow.querySelector('#det-saldo').textContent = banco.usuario.saldo;

            const movimientos = banco.obtenerMovimientos();
            this.actualizarMovimientos(movimientos, shadow);
            console.log("Se han enviado los datos a detalles");
        } else {
            console.log("No se encontró el shadowRoot en el componente bbva-details");
        }
    }
    render() {
        const template = `
        <style>
.form-login {
    background-color: #FFFF;
    border-radius: 15px;
    padding: 30px 25px;
    box-shadow: 0 4px 20px rgba(3, 82, 155, 0.1);
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
}

.form-login h5 {
    color: #03529B;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

.input-container {
    margin-bottom: 20px;
}

.form-login .controls {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #E0E0E0;
    border-radius: 6px;
    font-size: 16px;
    color: #333;
    transition: border-color 0.3s, box-shadow 0.3s;
    box-sizing: border-box;
}

.form-login .controls:focus {
    outline: none;
    border-color: #0695D7;
    box-shadow: 0 0 0 2px rgba(6, 149, 215, 0.2);
}

.form-login .controls::placeholder {
    color: #999;
}

.form-login .buttons {
    width: 100%;
    padding: 10px;
    background-color: #0695D7;
    color: #FFFF;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
}

.form-login .buttons:hover {
    background-color: #03529B;
}

.input-container {
    position: relative;
}

.input-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #999;
    font-size: 16px;
}

.form-login .controls.with-icon {
    padding-left: 35px;
}
        </style>
     <div class="form-login">
    <h5>Inicio de Sesión</h5>
    <div class="input-container">
        <span class="input-icon">👤</span>
        <input class="controls with-icon" type="text" name="usuario" placeholder="Usuario">
    </div>
    <div class="input-container">
        <span class="input-icon">🔒</span>
        <input class="controls with-icon" type="password" name="password" placeholder="Contraseña">
    </div>
    <input class="buttons" type="submit" value="Ingresar">
</div>
        `;
        this.shadowRoot.innerHTML = template;
    }
}
