export class Calculadora extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        //Operaciones en objeto para disminuir ciclomatica
        this.operaciones = [
            { signo: "+", operacion: this.sum },
            { signo: "-", operacion: this.res },
            { signo: "*", operacion: this.mul },
            { signo: "/", operacion: this.div },
        ];
    }

    connectedCallback() {
        this.render();
    }



    render() {
        this.shadowRoot.innerHTML = `
        <style>
            div {
                background-color: #ffffff;
                border-radius: 10px;
                padding: 20px;
                width: 300px;
                text-align: center;
            }

            h1 {
                color: #322e2e;
                margin-bottom: 20px;
            }

            p {
                font-size: 14px;
                color: #666;
                margin-bottom: 20px;
            }

            input{
                width: 80%;
                padding: 10px;
                border: 2px solid #ddd;
                border-radius: 5px;
                font-size: 16px;
                margin-bottom: 20px;
                outline: none;
                transition: border 0.3s ease;
            }

            input:focus {
                border-color: #3b82f6; 
            }

            button {
                background-color: #833bf6;
                color: #fff;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            button:hover {
                background-color: #2563eb;
            }

            .resultado {
                margin-top: 20px;
                font-size: 18px;
                color: #333;
                font-weight: bold;
            }
        </style>
        <h1>Calculadora</h1>
        <p>Se crea una calculadora donde colocaras en este cuadro de texto 2 numeros enteros.</p>
       <div>
            <input type:"text" id="operation" placeholder="1+1" />
            <button id="calculate">Resuelve</button>
            <div class="resultado" id="resultado"></div>
       </div>
        `;
        this.input = this.shadowRoot.getElementById("operation");
        this.resultadoDiv = this.shadowRoot.getElementById("resultado");
        this.button = this.shadowRoot.getElementById("calculate");

        //Evento para funciones
        this.button.addEventListener("click", () => this.calculateResult());
    }
    //Definimos funciones de calculadora
    sum(a, b) { return a + b; }
    res(a, b) { return a - b; }
    mul(a, b) { return a * b; }
    div(a, b) {
        if (b === 0) { return "Error: Division en cero invalida" }
        return a / b;
    }

    //Definir funcion para el listener, seleccionara la operacion
    calculateResult() {
        const operation = this.input.value;
        const separadorOperador = this.separadorOperacion(operation);

        if (separadorOperador) {
            const { a, operador, b } = separadorOperador; //separamos en 3 la cadena

            //Busca la operacion en el objeto
            const signoOperacion = this.operaciones.find(op => op.signo === operador);

            if (signoOperacion) {
                const result = signoOperacion.operacion(a, b);
                this.resultadoDiv.textContent = `Resultado: ${result}`;
            }
            else {
                this.resultadoDiv.textContent = "Operacion no valida";
            }
        }
        else {
            this.resultadoDiv.textContent = "Operacion Invalida, Verifique que no sea un numero con punto decimal. Ejemplo 2.1";
        }
    }

    //Expresion regular que divida
    separadorOperacion(operation) {
        // /^ (\d+) ([\+\-\*\/]) (\d+) $/
        const expresion = /^(\d+)([\+\-\*\/])(\d+)$/;
        const match = operation.match(expresion);

        if (match) {
            const a = parseFloat(match[1]);
            const operador = match[2];
            const b = parseFloat(match[3]);

            return { a, operador, b };
        }
        return null;
    }


}