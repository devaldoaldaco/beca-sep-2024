import { LitElement , html} from "lit";
import { dashboardStyles} from './dashboardStyles.js';

export class DashboardPage extends LitElement{
    constructor(){
        super();
        this.state=false;
    }

    static properties = {
        state: {
            type: Boolean,
        }
    };

    static styles = dashboardStyles;

    render() {
        return html`
          ${this.state ? html`
            <main>
              <h1>Bienvenido a tu lista de cuentas Kevin</h1>
              <p>Por favor selecciona la cuenta de la que quieres obtener información</p>
      
              <section>
                <img src="./card.jpg" alt="Card" style="border-radius: 50%;" width="80rem">
                <button id="detailsButton534" @click="${this._cuenta534}">Cuenta .534</button>
              </section>
      
              <section>
                <img src="./card.jpg" alt="Card" style="border-radius: 50%;" width="80rem">
                <button id="detailsButton999" @click="${this._cuenta999}">Cuenta .999</button>
              </section>
      
              <button id="returnButton" @click="${this._logout}">Volver al Login</button>
            </main>
          ` : html``} 
        `;
    }

    _logout() {
        this.dispatchEvent(new CustomEvent('logout')); 
    }

    _cuenta534(){
        this.dispatchEvent(new CustomEvent('cuenta534'));
    }

    _cuenta999(){
        this.dispatchEvent(new CustomEvent('cuenta999'))
    }
}