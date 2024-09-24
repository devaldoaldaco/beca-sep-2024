import { MyLoggin } from "./loggin.js";
import { MyDashboard } from "./dashboard.js";
import { MyDatos } from "./datos.js";
import { appBbva } from "./app-bbva.js";

window.customElements.define('app-bbva', appBbva);
window.customElements.define('loggin-bbva', MyLoggin);
window.customElements.define('dashboard-bbva', MyDashboard);
window.customElements.define('info-bbva', MyDatos);