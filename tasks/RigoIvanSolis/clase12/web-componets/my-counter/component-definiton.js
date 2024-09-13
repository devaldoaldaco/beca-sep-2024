export class MyCounter extends HTMLElement {
    constructor() {
        super(); // Instanciar todas las propiedades de esta clase
        this.counter = 0;
        this.attachShadow({mode: 'open'}); // API shadow DOM
    }

    connectedCallback() {
        this.render();
    } 

    incrementMethod() {
        this.counter++;
        this.render();
    }
   
    render() {
        this.shadowRoot.innerHTML = `
            <h1>COUNTER</h1>
            <span>${this.counter}</span>
            <button id="increment">Increment</button>
            <button id="reset">Reset</button>
            <button id="decrement">Decrement</button>
        `;

        const button1 = this.shadowRoot.querySelector("#increment");
        const button2 = this.shadowRoot.querySelector("#reset");
        const button3 = this.shadowRoot.querySelector("#decrement");

        button1.addEventListener('click', () => {
            this.counter++;
            this.render();
        });

        button2.addEventListener('click', () => {
            this.counter = 0;
            this.render();
        });

        button3.addEventListener('click', () => {
            this.counter--;
            this.render();
        });
    }
}
