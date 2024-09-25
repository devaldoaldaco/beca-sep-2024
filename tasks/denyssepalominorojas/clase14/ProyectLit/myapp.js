import {LitElement, html} from "lit";
import "./mylogin.js"
import "./mydashboard.js"
import "./mydetails.js"


export class MyApp extends LitElement {
    static get properties(){
        return {
            ocultarLogin:{ type: Boolean},
            ocultarDashboard:{type: Boolean},
            ocultarDetails:{ type: Boolean}
        }

    }

    constructor(){
        super();
        this.ocultarLogin = false;
        this.ocultarDashboard = true;
        this.ocultarDetails = true;
    }

    render(){ // sirve para definir el template de mi componente web
        return html`
        <my-login @login="${this.handleLogin}" ?hidden="${this.ocultarLogin}"></my-login>
        <my-dashboard @dashboard="${this.handleDashboard}" ?hidden="${this.ocultarDashboard}"></my-dashboard>
        <my-details @details="${this.handleDetails}" ?hidden="${this.ocultarDetails}"></my-details>
        `;
    } 

    handleLogin(){
        if(this.ocultarLogin === false){
        this.ocultarLogin = true;
        this.handleDashboard();
        }else{
            this.ocultarLogin = false
        }
    }

    handleDashboard(){
        if(this.ocultarDashboard === false){
            this.ocultarDashboard = true; 
            this.handleDetails();
        }else {
                this.ocultarDashboard = false

        }
    }

    handleDetails(){
        if(this.ocultarDetails === false){
            this.ocultarDetails = true;
            this.handleDashboard()
        }else{
                this.ocultarDetails = false
        }
    }
}