import { LitElement, html, css } from "lit"
import { cadsStyle } from "./cardsStyle.js";
export class MyCards extends LitElement{
    static get properties(){
        return{

        }
    }

    constructor(){
        super();
        
    }

    static styles = cadsStyle

    render(){
        return html `
        <div id ="mainDiv">
            <h1>Bienvenido Axel</h1>
            <div id = "cuentaAPesos">
        <section id ="sectionLeft">
            <p class = "title">Cuenta en pesos</p>
            <p class = "codigo">OOO1ah3825</p>
            <p id = "numbers">* 3825</p>
        </section>
        <section id= "sectionRight">
            <p id = "cash">$8,732,23</p>
            <p id = "saldoDisponible">Saldo disponible</p>
        </section>
            </div>
            <div id="divConClick" @click="${this.mostrarTarjeta}">
                <p id = "titleTarjetas">Tarjetas</p>
                <p id = "codigoTarjetas">OOO1ah3825</p>
                <p id= "rectangulo"></p>
                <p id = "numbers2">* 3825</p>
            </div>
            <img src="flecha-izquierda.png" @click="${this.regresarLogin}"> 
              
        </div>
        
        `

    }

    mostrarTarjeta(){
        const myCardElement = document.querySelector('my-cards')
        const myResumeElement = document.querySelector('my-resume')
        myCardElement.style.display = 'none'
        myResumeElement.style.display= 'block'


    }
    regresarLogin(){
        console.log("regresar")
        this.my_login = document.querySelector('my-login')
        this.my_login.style.display = "block"
        const myCardElement = document.querySelector('my-cards')
        myCardElement.style.display = "none"
    }
}