import { html, LitElement } from "lit";
import "./login";
import "./dashboard";
import "./details";
import { UsuarioBBVA } from "../../Clase_11092024/tareas/Proyecto/Clases/UsuarioBBVA";
import { Banco } from "./classes/Banco";
import { Movimientos } from "./classes/Movimientos"
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.14.0/+esm';

export class BbvaApp extends LitElement {
    static properties = {
        user: { type: Object },
        bank: { type: Object },
        isAuthenticated: { type: Boolean },
        showDashboard: { type: Boolean },
        showDetails: { type: Boolean },
    }
    static styles = []
    constructor() {
        super();
        this.user = null;
        this.bank = null;
        this.isAuthenticated = false;
        //es true porque el valor va a hidden
        this.showDashboard = true; 
        this.showDetails = true;

    }
    //Promesa de Validación
    promesaValidar(conError) {
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
    }
    crearUsuario(nombre,cuenta,saldo,tarjeta) {
        return new UsuarioBBVA(nombre,cuenta,saldo,tarjeta);
    }
    crearBanco(user) {
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
        return bbva;
    }
    //Manejo de loginy datos
    async handleLogin(event){
        const {usuario, password} = event.detail;
        if (usuario === "sergio.trinidad" && password === "root") {
            try {
                const mensaje = await this.promesaValidar(false);
                console.log(mensaje)

                //Crear usuario, movimientos de banco
                const user = this.crearUsuario("Sergio N Trinidad", "1563393264", 3000, "4152314147732245");
                user.ocultardatosSencibles();
                const banco = this.crearBanco(user);
                
                //Guardamos datos en el estado
                this.user = user;
                this.bank = banco;
                this.isAuthenticated = true; 
                
                // Verificar que los datos se están guardando correctamente
                console.log(`Usuario: ${JSON.stringify(this.user)}`);
                console.log(`Banco: ${JSON.stringify(this.bank)}`);
                //Noti Exito 
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
                //Mostramos Dashboard
                this.showDashboard= false;

            } catch (error) {
                console.log(error);
            }
        }
        else{
            console.log("No se encontro el usuario o Usuario o contraseña incorrectos")
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se encontro el usuario o Usuario o contraseña incorrectos',
            });
        }
    }
    //Mostrar detalles del banco
    handleViewDetails(){
        this.showDetails = true;
        this.showDashboard = false;
    }

    //Regresar a dashboard
    handleBackToDashboard(){
        this.showDetails = false;
        this.showDashboard = true;
    }

    render() {
        return html`
        <div ?hidden="${this.isAuthenticated}">
            <bbva-login @login="${this.handleLogin}"></bbva-login>
        </div>
        <div ?hidden="${this.showDashboard}">
            <bbva-dashboard .banco="${this.bank}" @ver-detalles="${this.handleViewDetails}"></bbva-dashboard>
        </div>
        <div ?hidden="${this.showDetails}">
            <bbva-details .banco="${this.bank}" @volver-dashboard="${this.handleBackToDashboard}"></bbva-details>
        </div>
        `
    }


}