export class MyCalculadora extends HTMLElement {
    constructor() {
        super(); // Instanciar todas las propiedades de esta clase
        this.attachShadow({mode: 'open'}); // API shadow DOM
    }

    connectedCallback() {
        this.render();
    } 

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                    display: block;
                    height: 100vh; 
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0;
                }
                
                 div {
                    width: 300px;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                }

                button {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    margin-top:3px;
                }

                button:hover {
                    background-color: #0056b3;
                }
        
        </style>

        <div>
        
            <h1>Calculadora</h1>
            <input type="text" id="texto" readonly>
            <button id="uno">1</button>
            <button id="dos">2</button>
            <button id="tres">3</button>
            <button id="cuatro">4</button>
            <button id="cinco">5</button>
            <button id="seis">6</button>
            <button id="siete">7</button>
            <button id="ocho">8</button>
            <button id="nueve">9</button>
            <button id="cero">0</button>
            <button id="suma">+</button>
            <button id="resta">-</button>
            <button id="multi">*</button>
            <button id="divi">/</button>
            <button id="igual">=</button>
            <button id="clear">C</button>
        </div>
        `;

        const buttons = this.shadowRoot.querySelectorAll("button");
        this.input = this.shadowRoot.querySelector("#texto");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                this.updateInput(buttons[i].id);
            });
        }
    }

    updateInput(buttonId) {
        const buttonValues = {
            uno: '1',
            dos: '2',
            tres: '3',
            cuatro: '4',
            cinco: '5',
            seis: '6',
            siete: '7',
            ocho: '8',
            nueve: '9',
            cero: '0',
            suma: '+',
            resta: '-',
            multi: '*',
            divi: '/',
            igual: '=',
            clear: 'C'
        };

        const input = this.shadowRoot.querySelector("#texto");

        if (buttonId === 'clear') {
            this.clearDisplay();
        } else if (buttonId === 'igual') {
            this.calculate();
        } else {
            input.value += buttonValues[buttonId];
        }
    }

    clearDisplay() {
        this.shadowRoot.querySelector("#texto").value = '';
    } 

    calculate() {
        const input = this.shadowRoot.querySelector("#texto");
        try {
            // Evaluar la expresión en el input
            const result = eval(input.value);
            // Mostrar el resultado
            input.value = result;
        } catch (e) {
            // En caso de error, limpiar el display
            input.value = 'Error';
        }
    }      
}
