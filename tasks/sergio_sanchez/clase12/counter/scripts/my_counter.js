import {LitElement, html, css} from 'lit-element';

export class MyCounter extends LitElement{
    static get properties(){
        return {
            myCounter: {
              type: Number,
              attribute: 'mycounter'
            }
          };
    }
    constructor(){
        super();
        this.myCounter = 0;
    }
    static get styles(){
        return css`
            * {
                box-sizing: border-box;
                margin: 0px;
                padding: 0px;
            }

            .container {
                height: 100vh;
                width: 100vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .container h1 {
                margin: 30px;
            }

            .counter {
                width: 30%;
                display: flex;
                justify-content: center;
            }

            #increment-btn,
            #decrement-btn,
            #reset {
                height: 50px;
                width: 120px;
                padding: 0 40px;
                border-radius: 10px;
                font-size: 40px;
                background-color: #2e8d46;
                border: 2px solid #2e8d46;
                color: white;
                margin: 20px;
            }

            #reset {
                font-size: 20px;
                text-align: center;
            }

            #counter-value {
                height: 50px;
                min-width: 120px;
                border-radius: 10px;
                background-color: rgba(255, 0, 0, 0.187);
                margin-top: 20px;
                font-size: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `;
    }

    _increment(){
        this.myCounter++;
    }
    _decrement(){
        this.myCounter--;
    }
    _reset(){
        this.myCounter = 0;
    }
    
    render(){
        console.log(this.myCounter)
        return html`
            <div class="container">
                <h1>Counter</h1>
                <h1 id="counter-value">${this.myCounter}</h1>
                <div class="counter">
                    <button id="increment-btn" @click="${this._increment}">+</button>
                    <button id="reset" @click="${this._reset}">Reset</button>
                    <button id="decrement-btn" @click="${this._decrement}">-</button>
                </div>
            </div>
        `;
    }
}