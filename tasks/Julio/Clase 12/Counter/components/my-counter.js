import { LitElement, html, css } from "lit";

export class MyCounter extends LitElement{
    constructor(){
        super();
        this.counter=0;
    }

    static get properties(){
        return {
            counter: {
                type: Number,
                attribute: 'mycounter'
            }
        }
    }

    static get styles(){
        return css`
         section{
                height: 50vh;
                background-color: #D4E6F1;
                width:100%;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
            }
        section>div:nth-child(2){
            display:inline;
        }
        button{
                padding: 1rem 0.5rem;
                font-size: 0.8rem;
                border-radius: 10%;
                width:100%;
        }
        button:hover{
                background-color:#5499C7;
                color: white;
        }
        @media only screen and (min-width:768px){
        
            button{
                width:10rem;
            }
        }

        `;
    }

    _incrementar(){
        this.counter++;
    }

    _decrementar(){
        this.counter--;
    }

    _reset(){
        this.counter=0;
    }
    render(){
        return html`
        <section>
            <div>
                <h1>${this.counter}<h1>
            </div>
            <div>
                <button @click="${this._decrementar}">Decrementar</button>
                <button @click="${this._reset}">Reset</button>
                <button @click="${this._incrementar}">Incrementar</button>
            <div>
        </section>
        `;
    }
}