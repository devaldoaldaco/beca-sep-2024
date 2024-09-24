import {LitElement, html} from "lit";
import "./loggin.js"
import "./dashboard.js"
import "./datos.js"


export class appBbva extends LitElement {
    constructor(){
        super();
        this.ocultarLoggin=false;
        this.ocultarDashboard=true;
        this.ocultarDatos=true;
    }

    static get properties(){
        return {
            ocultarLoggin:{
                type:Boolean
            },

            ocultarDashboard:{
                type:Boolean
            },

            ocultarDatos:{
                type:Boolean
            }
        }

    }
        

    render(){ // sirve para definir el template de mi componente web
        return html`
    <loggin-bbva @ocultar-loggin="${this.handleOcultarLoggin}" ?hidden="${this.ocultarLoggin}"></loggin-bbva>
    <dashboard-bbva @ocultar-dashboard="${this.handleOcultarDashboard}" ?hidden="${this.ocultarDashboard}" @cierre-sesion="${this.cerrarSesion}"></dashboard-bbva>
    <info-bbva @ocultar-datos="${this.handleOcultarDatos}" ?hidden="${this.ocultarDatos}"></info-bbva>
        `;
    }

    

    handleOcultarLoggin(){
        if(this.ocultarLoggin===false){
        this.ocultarLoggin=true;
        this.handleOcultarDashboard();
        }else{
            this.ocultarLoggin=false
        }
    }

    handleOcultarDashboard(){
        if(this.ocultarDashboard===false){
            this.ocultarDashboard=true; 
            this.handleOcultarDatos();
        }else {
                this.ocultarDashboard=false

            }
    }

    handleOcultarDatos(){
        if(this.ocultarDatos===false){
            this.ocultarDatos=true;
            this.handleOcultarDashboard()
        }else{
                this.ocultarDatos=false
            }
    }

    cerrarSesion(){
        this.ocultarLoggin=false;
        this.ocultarDashboard=true;
        this.ocultarDatos=true;
    }

}