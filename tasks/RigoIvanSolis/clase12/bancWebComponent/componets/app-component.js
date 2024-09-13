export class MyApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
                <app-login></app-login>
            `;

        this.shadowRoot
        .querySelector("app-login")
        .addEventListener("loginSuccess", () => {
            this.renderDashboard();
        });

        
    }
   
    renderDashboard() {
        this.shadowRoot.innerHTML = `
                <app-dashboard></app-dashboard>
            `;

        this.shadowRoot
        .querySelector("app-dashboard")
        .addEventListener("logout", () => {
            this.render();
        });

        this.shadowRoot.querySelector("app-dashboard")
        .addEventListener("detall", () => {
            this.renderDetails();
        });


    }

    renderDetails() {
        this.shadowRoot.innerHTML = `
                <app-details></app-details>
            `;

        this.shadowRoot
        .querySelector("app-details")
        .addEventListener("back", () => {
            this.renderDashboard();
        });
    }
  

   

    

    
}
