export class MyCalculator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .display {
                    width: 100%;
                    height: 40px;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                    background-color: #e0e0e0;
                    text-align: right;
                    padding: 10px;
                    box-sizing: border-box;
                    font-size: 1.5em;
                    overflow: hidden;
                }
                .button {
                    width: 25%;
                    height: 40px;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                    background-color: #fff;
                    text-align: center;
                    line-height: 40px;
                    margin: 2px;
                    font-size: 1.2em;
                    cursor: pointer;
                }
                #buttonc{
                    width: 100%;
                }
                .button:active {
                    background-color: #d0d0d0;
                }
                .row {
                    display: flex;
                    justify-content: center;
                }
            </style>
            <div class="calculator">
                <div id="display" class="display">0</div>
                <div class="row">
                    <div class="button" id="buttonc" value="C">C</div>
                </div>
                <div class="row">
                    <div class="button" value="7">7</div>
                    <div class="button" value="8">8</div>
                    <div class="button" value="9">9</div>
                    <div class="button" value="/">/</div>
                </div>
                <div class="row">
                    <div class="button" value="4">4</div>
                    <div class="button" value="5">5</div>
                    <div class="button" value="6">6</div>
                    <div class="button" value="*">*</div>
                </div>
                <div class="row">
                    <div class="button" value="1">1</div>
                    <div class="button" value="2">2</div>
                    <div class="button" value="3">3</div>
                    <div class="button" value="-">-</div>
                </div>
                <div class="row">
                    <div class="button" value="0">0</div>
                    <div class="button" value=".">.</div>
                    <div class="button" value="=">=</div>
                    <div class="button" value="+">+</div>
                </div>
            </div>
        `;

        this.shadowRoot.querySelectorAll('.button').forEach(button => {
            button.addEventListener('click', () => this.valorBoton(button));
        });
    }

    Numero(numero) {
        const display = this.shadowRoot.getElementById('display');
        if (display.innerText === '0') {
            display.innerText = numero;
        } else {
            display.innerText += numero;
        }
    }

    Operador(operador) {
        const display = this.shadowRoot.getElementById('display');
        const texto = display.innerText;
        if (texto !== '' && !['+', '-', '*', '/'].includes(texto.slice(-1))) {
            display.innerText += operador;
        }
    }

    limpiarPantalla() {
        this.shadowRoot.getElementById('display').innerText = '0';
    }

    calcularResultado() {
        const display = this.shadowRoot.getElementById('display');
        try {
            display.innerText = eval(display.innerText) || '0';
        } catch {
            display.innerText = 'Error';
        }
    }

    valorBoton(button) {
        const valor = button.getAttribute('value');
        if (valor === 'C') {
            this.limpiarPantalla();
        } else if (valor === '=') {
            this.calcularResultado();
        } else if (['+', '-', '*', '/'].includes(valor)) {
            this.Operador(valor);
        } else {
            this.Numero(valor);
        }
    }
}
