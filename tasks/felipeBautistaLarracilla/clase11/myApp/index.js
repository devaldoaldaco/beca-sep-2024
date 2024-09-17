import { Login } from "./login-component.js";
import { Dashboard } from "./dashboard-component.js";
import { AccountMovements } from "./movements-components.js";

window.customElements.define('component-login',Login);
window.customElements.define('component-dashboard', Dashboard);
window.customElements.define('component-movements',AccountMovements);