import {LitElement, html, css} from "lit-element";
// lit-html 

// CADENA DE PROTOTIPOS 
class MyCounter extends LitElement {
    constructor(){
        super();
        this.myCounter = 0;

    }

    static get properties(){
        return {
            myCounter: {
                type: Number,
                attribute: 'mycounter'
            }
        }
    }

    static get styles(){
        return css`
    
            h1{
                background: #f5f96ded;
            }

            button{
                background-color: #c3f096;
                color: black;
                border-radius: 10px;
                border: 1px solid #515325ec
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

customElements.define('my-counter', MyCounter);