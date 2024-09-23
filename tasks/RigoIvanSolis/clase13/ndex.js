import { html, css, LitElement } from "lit-element";

class MyCounter extends LitElement {

    constructor(){
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
        return styles;
    }

    _increment() {
        this.myCounter++;
    }

    _decrement() {
        this.myCounter--;
    }

    _reset() {
        this.myCounter = 0;
    }

    render() {
        return html `
            <h1>My Counter: ${this.myCounter}</h1>
            <button @click="${this._increment}">Increment</button>
            <button @click="${this._reset}">Reset</button>
            <button @click="${this._decrement}">Decrement</button>
        `;
    }
}

customElements.define('my-counter', MyCounter);