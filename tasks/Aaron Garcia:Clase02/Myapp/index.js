import { MyLoggin } from "./loggin.js";
import { MyDashboard } from "./dashboard.js";
import { MyDatos } from "./datos.js";

window.customElements.define('loggin-bbva', MyLoggin);
window.customElements.define('dashboard-bbva', MyDashboard);
window.customElements.define('info-bbva', MyDatos);