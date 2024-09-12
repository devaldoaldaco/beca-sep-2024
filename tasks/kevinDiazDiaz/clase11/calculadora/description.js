export class Calculadora extends HTMLElement {

    constructor() {
        super();
        this.resultado = ""; 
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="styles.css">
            <h1>Calculadora</h1>
            <main>
                <section data-name="resultados">
                    <input type="text" id="display-operacion" readonly>
                    <p>=</p>
                    <input type="text" id="display-result" readonly>
                </section>
            
                <section data-name="teclas">
                    <section class="botones">
                        <button id="uno">1</button>
                        <button id="cuatro">4</button>
                        <button id="siete">7</button>
                        <button id="clear">C</button>
                    </section>
            
                    <section class="botones">
                        <button id="dos">2</button>
                        <button id="cinco">5</button>
                        <button id="ocho">8</button>
                        <button id="cero">0</button>
                    </section>
            
                    <section class="botones">
                        <button id="tres">3</button>
                        <button id="seis">6</button>
                        <button id="nueve">9</button>
                        <button id="equal">=</button>
                    </section>
            
                    <section class="botones">
                        <button id="add">+</button>
                        <button id="rest">-</button>
                        <button id="mult">x</button>
                        <button id="div">/</button>
                    </section>
                </section>
            </main>
        `;
    }

    setupEventListeners() {
        // Números
        this.shadowRoot.getElementById("cero").addEventListener('click', () => this.addNumber(0));
        this.shadowRoot.getElementById("uno").addEventListener('click', () => this.addNumber(1));
        this.shadowRoot.getElementById("dos").addEventListener('click', () => this.addNumber(2));
        this.shadowRoot.getElementById("tres").addEventListener('click', () => this.addNumber(3));
        this.shadowRoot.getElementById("cuatro").addEventListener('click', () => this.addNumber(4));
        this.shadowRoot.getElementById("cinco").addEventListener('click', () => this.addNumber(5));
        this.shadowRoot.getElementById("seis").addEventListener('click', () => this.addNumber(6));
        this.shadowRoot.getElementById("siete").addEventListener('click', () => this.addNumber(7));
        this.shadowRoot.getElementById("ocho").addEventListener('click', () => this.addNumber(8));
        this.shadowRoot.getElementById("nueve").addEventListener('click', () => this.addNumber(9));

        // Operaciones
        this.shadowRoot.getElementById("add").addEventListener('click', () => this.setOperation('+'));
        this.shadowRoot.getElementById("rest").addEventListener('click', () => this.setOperation('-'));
        this.shadowRoot.getElementById("mult").addEventListener('click', () => this.setOperation('*'));
        this.shadowRoot.getElementById("div").addEventListener('click', () => this.setOperation('/'));

        // Igual y limpiar
        this.shadowRoot.getElementById("equal").addEventListener('click', () => this.calculate());
        this.shadowRoot.getElementById("clear").addEventListener('click', () => this.clear());
    }

    addNumber(num) {
        this.resultado += num; 
        this.updateDisplayOperacion(); 
    }

    setOperation(oper) {
        if (this.resultado) {
            this.resultado += ` ${oper} `; 
            this.updateDisplayOperacion(); 
        }
    }

    calculate() {
        const expression = this.resultado.replace('x', '*');

        if (expression) {
            const result = new Function('return ' + expression)();
            this.shadowRoot.getElementById("display-result").value = result;
        } else {
            this.shadowRoot.getElementById("display-result").value = "Error";
        }
    }

    clear() {
        this.resultado = ""; 
        this.updateDisplayOperacion(); 
        this.shadowRoot.getElementById("display-result").value = ""; 
    }

    updateDisplayOperacion() {
        this.shadowRoot.getElementById("display-operacion").value = this.resultado; 
    }
}
