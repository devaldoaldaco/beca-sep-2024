import {LitElement, html, css} from 'lit'
import {mostrarActividad} from './indexServices.js';

export class MyInput extends LitElement{
    static get properties(){
        return{
            activity: { type: String },
        }
    };

    constructor(){
        super();
        this.activity = '';
        this.mostrarActividad = mostrarActividad.bind(this)
    }

    render(){
        return html`
        <link rel="stylesheet" href="./scripts/style.css">
        <div id ="main">
            <p>Agrega una actividad!</p>
            <input type="text" .value="${this.activity}" @input="${this.agegarActividad}">
            <button @click="${this.mostrarActividad}" id="btnAgregar">Agregar</button>
        </div>
        <ul id="listaActividades">
            
        </ul>
        `

        
    }





   

    agegarActividad(event){
        this.activity = event.target.value;
    }

}