import { LitElement, html } from "lit";

import './login-component';
import './dashboard-component';
import './movements-component';
import './movements-component_2';

class AppComponent extends LitElement{
  static get properties(){
    return {
      currentView: { type: String },
      }
    };

    constructor(){
      super();
      this.currentView ='login';//Vista inicial es el login
    }

    render(){
      switch(this.currentView){
        case 'login':
          return html `<login-component @authenticated = "${this._handleAuthentication}"></login-component>`;
        case 'dashboard':
          return html `<dashboard-component @view-movements ="${this._handleViewMovements}" 
            @view-movements_2 ="${this._handleViewMovements_2}"
            @logout ="${this._handleLogout}"></dashboard-component>`;
        case 'movements':
          return html `<movements-component @go-back="${this._handleGoBack}"></movements-component>`;
        case 'movements_2':
          return html `<movements-component_2 @go-back="${this._handleGoBack}"></movements-component_2>`;
        default:
          return html`<p>Vista no encontrada</p>`;
      }
    }
    _handleAuthentication(){
      this.currentView = 'dashboard'; //Cambia a dashboard despues de autenticarse
    }
    _handleViewMovements(){
      this.currentView = 'movements'; //Cambia a movements al hacer clic en una cuenta 
    }
    _handleViewMovements_2(){
      this.currentView = 'movements_2'; //Cambia a movements al hacer clic en una cuenta  2
    }
    _handleGoBack(){
      this.currentView = 'dashboard';// Vuelve a dashboard desde movements 
    }
    _handleLogout(){
      this.currentView = 'login';//vuelve a login desde dashboard
    }
    
}
customElements.define('app-component',AppComponent);

