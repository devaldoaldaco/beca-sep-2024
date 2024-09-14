import {LitElement, html, css} from "lit-element";

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
            *{
                margin: 0;
                padding: 0;
            }

            main{
                width: 50%;
                margin: 2rem auto;
                background-color: lightsteelblue;
                padding: 2rem;
                border-radius: 2rem;
            }

            section{
                display: flex;
                justify-content: center; 
                align-items: center;  
            }

            button{
                margin: 1rem 0.5rem;
                background-color: lightblue;
                padding: 1rem;  
                border-radius: 10%;
                border-color: blue;
                font-family: Arial;
                font-size: 1rem;
                font-style: italic;
            }

            h1{
                text-align: center;
                font-family:Arial;
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

    render(){ 
        return html`
            <main>
                <h1>My Counter: ${this.myCounter}</h1>
                <section>
                    <button @click="${this._incrementar}">Increment</button>
                    <button @click="${this._decrementar}">Decrement</button>
                    <button @click="${this._reset}">Reset</button>
                </section>
            </main>
            
        `;
    }
}

customElements.define('my-counter', MyCounter);