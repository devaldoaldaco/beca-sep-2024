import { LoginPage } from "./login.js";
import { SpinPage } from "./spin.js";
import { DashboardPage } from './dashboard.js';
import { Cuenta534 } from "./cuenta534.js";
import { Cuenta999 } from "./cuenta999.js";

window.customElements.define('login-page', LoginPage);
window.customElements.define('spin-page', SpinPage);
window.customElements.define('dashboard-page', DashboardPage);
window.customElements.define('cuenta534-page', Cuenta534);
window.customElements.define('cuenta999-page', Cuenta999);

document.addEventListener('DOMContentLoaded', () => {
    function waitFor(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const loginPage = document.querySelector('login-page');
    const dashboardPage = document.querySelector('dashboard-page');
    const cuenta534Page = document.querySelector('cuenta534-page');
    const cuenta999Page = document.querySelector('cuenta999-page');
    const spinPage = document.querySelector('spin-page');

    loginPage.addEventListener('login-success', () => { 
        spinPage.state = true;

        waitFor(3000).then(() => {
            spinPage.state = false; 
            loginPage.state=false;
            dashboardPage.state = true; 
        });
    });

    dashboardPage.addEventListener('logout', () => {
        loginPage.state = true;  
        dashboardPage.state = false;  
    });

    dashboardPage.addEventListener('cuenta534', () => {
        dashboardPage.state=false;
        cuenta534Page.state=true;
    });

    cuenta534Page.addEventListener('cuenta534Out', () => {
        dashboardPage.state=true;
        cuenta534Page.state=false;
    }); 

    dashboardPage.addEventListener('cuenta999', () => {
        dashboardPage.state=false;
        cuenta999Page.state=true;
    });

    cuenta999Page.addEventListener('cuenta999Out', () => {
        dashboardPage.state=true;
        cuenta999Page.state=false;
    })
});