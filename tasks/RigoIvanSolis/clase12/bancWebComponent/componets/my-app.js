import { MyApp } from './app-component.js';
import { appLogin } from './app-login.js';
import { appDashboard } from './app-dashboard.js';
import { appDetails } from './app-details.js';

window.customElements.define('my-app', MyApp);
window.customElements.define('app-login', appLogin);
window.customElements.define('app-dashboard', appDashboard);
window.customElements.define('app-details', appDetails);

