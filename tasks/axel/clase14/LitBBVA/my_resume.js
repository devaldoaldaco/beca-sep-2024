import { LitElement, html, css } from "lit";
import { resumeStyle } from "./resumeStyle";

export class MyResume extends LitElement{
    static get properties(){
        return{

        }
    }

    constructor(){
        super()

    }

    static styles = resumeStyle

    render(){
        return html`
        <div id ="mainDiv">
            <h1>Resumen</h1>
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
        <div id="Resume">
        <div id ="contenedorMov1">
        <div>
            <p class = "titleTarjetas">Ultimos Movimientos</p>
            <p class = "fecha">3 de diciembre</p>
            <p class = "codigoTarjetas">OOO1ah3825</p>
            <p class = "numbers2">* 3825</p>
        </div>
        <div class="right">
            <p>$5,852.22</p>
        </div>
        </div>
        <div id ="contenedorMov2">
        <div>
            <p class = "titleTarjetas">Ultimos Movimientos</p>
            <p class = "fecha">8 de diciembre</p>
            <p class = "codigoTarjetas">OOO1ah3825</p>
            <p class = "numbers2">* 3825</p>
        </div>
        <div class="right">
            <p>$2,591.00</p>
        </div>

        </div>
        </div>
        <img src="flecha-izquierda.png" @click="${this.regresaCards}"> 
        </div>
        `
    }

    regresaCards(){
        console.log("click")
        const resume = document.querySelector('my-resume')
        resume.style.display='none'
        const cards = document.querySelector('my-cards')
        cards.style.display='block'
    }
}