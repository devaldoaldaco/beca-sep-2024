import { LitElement, html } from "lit";
import './components/login-view.js';
import './components/dashboard-view.js';
import './components/details-view.js';

class MyApp extends LitElement {
    static properties = {
        view: { type: String },
        accounts: { type: Array },
        selectedAccount: { type: Object }
    };

    constructor() {
        super();
        this.view = 'login-view';
        this.accounts = [];
        this.selectedAccount = null;
    }

    render() {
        return html`
            <div>
                ${this.view === 'login-view'
                    ? html`<login-view @login-success="${() => this.changeView('dashboard-view')}"></login-view>`
                    : this.view === 'dashboard-view'
                    ? html`<dashboard-view .accounts="${this.accounts}" @view-details="${(e) => this.showDetails(e.detail)}" @back-to-login="${() => this.backToLogin()}"></dashboard-view>`
                    : html`<details-view .account="${this.selectedAccount}" @back-to-dashboard="${() => this.backToDashboard()}"></details-view>`}
            </div>
        `;
    }

    changeView(newView) {
        if (newView === 'dashboard-view') {
            this.loadAccounts(); 
        }
        this.view = newView;
    }

    async loadAccounts() {
        try {
            const response = await fetch('./accounts.json'); 
            this.accounts = await response.json();
        } catch (error) {
            console.error('Error al cargar cuentas:', error);
        }
    }

    showDetails(account) {
        this.selectedAccount = account;
        this.view = 'details-view';
    }

    backToDashboard() {
        this.view = 'dashboard-view';
        this.selectedAccount = null;
    }

    backToLogin() {
      this.view = 'login-view';
    }
    
}

customElements.define('my-app', MyApp);
