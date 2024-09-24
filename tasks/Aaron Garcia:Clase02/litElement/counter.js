import {LitElement, html, css} from "lit-element";
// lit-html 

// CADENA DE PROTOTIPOS 
export class MyCounter extends LitElement {
    constructor(){
        super();
        this.myCounter = 0;

    }

    static get properties(){
        return {
            myCounter: {
                type: Number,
                attribute: 'myCounter'
            }
        }
    }

    static get styles(){
        return css`
            h1{
                background: #f5f96ded;
            }
        `;
    }

    _incrementar(){
        this.myCounter++;
    }

    _decrementar(){
        this.myCounter--;
    }

    _reset(){
        this.myCounter = 0;
    }

    render(){ // sirve para definir el template de mi componente web
        return html`
            <h1>My Counter: ${this.myCounter}</h1>
            <button @click="${this._incrementar}">Increment</button>
            <button @click="${this._decrementar}">Decrement</button>
            <button @click="${this._reset}">Reset</button>
        `;
    }
}