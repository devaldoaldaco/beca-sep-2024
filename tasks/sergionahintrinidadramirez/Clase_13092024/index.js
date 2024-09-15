import { LitElement, html, css } from "lit-element";
// lit-html 

// CADENA DE PROTOTIPOS 
class MyCounter extends LitElement {
    constructor() {
        super();
        this.myCounter = 0;

    }

    static get properties() {
        return {
            myCounter: {
                type: Number,
                attribute: 'mycounter'
            }
        }
    }

    static get styles() {
        return css`
 :host {
  --primary-color: #ffb703;
  --secondary-color: #023047;
  --accent-color: #ef233c;
  --text-color: #2c3e50;
  --background-color: #edf2f4;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--background-color);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 300px; /* Ajusta segÃēn necesites */
  width: 250px; /* Ajusta segÃēn necesites */
}

h1 {
  color: var(--text-color);
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.button-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  width: 60px;
  height: 60px;
  font-size: 18px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

button:hover {
  transform: translateY(-30px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

button:active {
  transform: translateY(-10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button:nth-child(2) {
  background-color: var(--secondary-color);
}

button:nth-child(3) {
  background-color: var(--accent-color);
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1); }
}

h1 span {
  display: inline-block;
  animation: pulse 2s infinite;
  color: var(--secondary-color);
}

@media (max-width: 600px) {
  :host {
    padding: 15px;
    height: 250px;
    width: 200px;
  }
  
  h1 {
    font-size: 28px;
  }
  
  button {
    width: 50px;
    height: 50px;
    font-size: 16px;
  }
}  `;
    }

    _incrementar() {
        this.myCounter++;
    }

    _decrementar() {
        this.myCounter--;
    }

    _reset() {
        this.myCounter = 0;
    }

    render() {
        return html`
            <h1>Contador. <br> <span>${this.myCounter}</span></h1>
            <div class="button-container">
                <button @click="${this._incrementar}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg></button>
                <button @click="${this._reset}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg></button>
<button @click="${this._decrementar}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
</svg></button>
            </div>`;
        }
}

customElements.define('my-counter', MyCounter);