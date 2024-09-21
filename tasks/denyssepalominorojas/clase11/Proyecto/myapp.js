//import {MyApp} from './myapp.js';
import {MyLogin} from './mylogin.js';
import {MyDashboard} from './mydashboard.js';
import {MyDetails} from './mydetails.js';

//window.createElements.define('my-app', MyApp);
window.customElements.define('my-login', MyLogin);
window.customElements.define('my-dashboard', MyDashboard);
window.customElements.define('my-details', MyDetails);