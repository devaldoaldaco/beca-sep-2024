import { Login } from "./components/login";
import { Dashboard } from "./components/dashboard";
import { Details } from "./components/details";
import { BbvaApp } from "./components/bbva-app";

window.customElements.define("bbva-login", Login);
window.customElements.define("bbva-dashboard", Dashboard);
window.customElements.define("bbva-details", Details);
window.customElements.define("bbva-app", BbvaApp);