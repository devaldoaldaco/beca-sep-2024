import { LitElement, html, css } from 'lit';
export class MyCounter extends LitElement {
    // 1. Declaración de propiedades observables
    static get properties(){
      return{
        counter: {
            type: Number,
            attribute: 'mycounter'
        }
      };
    }

    constructor(){
        super();
        this.counter = 0;
    }
  
    // 2. Estilos del componente
    static styles = css`
      :host {
        display: block;
        font-family: Arial, sans-serif;
        border: 1px solid #ccc;
        padding: 16px;
        border-radius: 8px;
        max-width: 300px;
      }
      h1 {
        color: blue;
      }
    `;
  
    // 4. Método render() que define el template HTML
    render() {
      return html`
        <div>
            <h1>Contador</h1>
            <h1>${this.counter}</h1>
            <button @click = ${this._increment}>Incrementar</button>
            <button @click = ${this._decrement}>Decrementar</button>
            <button @click = ${this._reset}>Resetear</button>
        
        </div>
      `;
    }
  
    // 5. Métodos del componente
    _increment(){
        this.counter ++;
        console.log("estas incrementando")
    }
    _decrement(){
        this.counter --;
    }
    _reset(){
        this.counter =0;
    }
}
