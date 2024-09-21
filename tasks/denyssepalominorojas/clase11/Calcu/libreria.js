export class MiCalculadora extends HTMLElement {
    constructor() {// INICIALIZACIÓN DE PROPIEDADES DE LA CLASE
        super();
        this.counter = 0;
        this.valor1 = 0;
        this.valor2 = 0;
        this.num1 = 0;
        this.num2 = 0;
        this.suma = null;
        this.resta = null;
        this.multiplicacion = null;
        this.division = null;
        this.reset = null;
        this.attachShadow({ mode: 'open' });// API SHADOW DOM 
    }

    //WB COMPONENTS VANILLA JS
    connectedCallback() {// EL NODO SE AGREGÓ AL DOM
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        h1 {
            text-align: center;
            color: #4A90E2;
            font-family: 'Arial', sans-serif;
        }

        span {
            display: block;
            font-size: 2em;
            text-align: center;
            margin: 20px 0;
            color: #333;
        }

        input[type="text"] {
            width: 80%;
            padding: 10px;
            margin: 10px auto;
            display: block;
            border: 2px solid #4A90E2;
            border-radius: 5px;
            font-size: 1.2em;
            text-align: center;
        }

        button {
            width: 18%;
            padding: 10px;
            margin: 5px;
            background-color: #4A90E2;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1.2em;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #357ABD;
        }
        </style>

        <h1>Calculadora DPR </h1>
        <span> ${this.counter} </span>
        <input type= "text" id ="input1" > </input>
        <input type= "text" id ="input2" > </input>
        <button id= "Suma" > + </button>
        <button id= "Resta" > - </button>
        <button id= "Multiplicacion" > x </button>
        <button id= "Division" > % </button>
        <button id= "Reset" > AC/C </button>
        `;

        this.input1 = this.shadowRoot.getElementById("input1");//Actualizo el valor para obtener el nodo
        this.input2 = this.shadowRoot.getElementById("input2");//Actualizo el valor para obtener el nodo
        this.suma = this.shadowRoot.getElementById("Suma");//Actualizo el valor para obtener el nodo
        this.resta = this.shadowRoot.getElementById("Resta");//Actualizo el valor para obtener el nodo
        this.multiplicacion = this.shadowRoot.getElementById("Multiplicacion");//Actualizo el valor para obtener el nodo
        this.division = this.shadowRoot.getElementById("Division");//Actualizo el valor para obtener el nodo
        this.reset = this.shadowRoot.getElementById("Reset");//Actualizo el valor para obtener el nodo


        //EVENTOS INPUTS
        this.input1.addEventListener('input', (ev) => {
            this.num1 += ev.data;
            this.valor1 = Number(this.num1);
        });

        this.input2.addEventListener('input', (ev) => {
            this.num2 += ev.data;
            this.valor2 = Number(this.num2);
        });

        // EVENTOS BOTONES
        this.suma.addEventListener('click', () => {
            this.counter = this.valor1 + this.valor2;
            this.num1 = 0;
            this.num2 = 0;
            this.render();
        });
        this.resta.addEventListener('click', () => {
            this.counter = this.valor1 - this.valor2;
            this.num1 = 0;
            this.num2 = 0;
            this.render();
        });
        this.multiplicacion.addEventListener('click', () => {
            this.counter = this.valor1 * this.valor2;
            this.num1 = 0;
            this.num2 = 0;
            this.render();
        });
        this.division.addEventListener('click', () => {
            this.counter = this.valor1 / this.valor2;
            this.num1 = 0;
            this.num2 = 0;
            this.render();
        });
        this.reset.addEventListener('click', () => {
            this.counter = 0;
            this.render();
        })
    }
}