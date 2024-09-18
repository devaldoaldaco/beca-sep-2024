import { LitElement, html, css } from 'lit-element';

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
            button{
            border-radius: 25px;
            background-color: blue;
            width: 100px;
            height: 50px;
            color:white;
            }
            button:hover{
            background-color: rgb(51, 51, 240);
            }
        `;
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
            <h1>My Counter:${this.myCounter}</h1>
            <button @click="${this._incrementar}">Increment</button>
            <button @click="${this._decrementar}">Decrement</button>
            <button @click="${this._reset}">Reset</button>
        `;
    }
}

customElements.define('my-counter', MyCounter);