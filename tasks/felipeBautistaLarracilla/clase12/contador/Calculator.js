import { html, css, LitElement } from "lit-element";

export class Calculator extends LitElement {
  constructor() {
    super();
    this.displayValue = '';
  }

  _typeValue(event) {
    const numToDysplay = event.currentTarget.dataset.value;
   // console.log(numToDysplay);
    if( this.displayValue === ''){
      if(numToDysplay !== "0"){
        this.displayValue += numToDysplay;
      }
      }else{
        this.displayValue += numToDysplay;
        //console.log(typeof(this.displayValue));
      }
  }

  _greting(){
    this.displayValue = 'Hola =)';
    //console.log("saludo")
  }
  _delete(){
    this.displayValue = this.displayValue.slice(0,-1);
    //console.log("borrando")
  }

  _reset() {
    this.displayValue = '';

  }

  _result(){
this.firstNumber = eval(this.displayValue);
this.displayValue = this.firstNumber;
  
  }

  
  static get properties() {
    return {
      displayValue: {
        type: String,
      }
    };
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    
      .calculator {
        margin: 2rem 0;
        width: 300px;
      }
      
      .display {
        width: 100%;
        font-size: 3rem;
        resize: none;
        align-content: left;

      }

      .buttons {
        display: flex;
        flex-wrap: wrap;
      }

      .buttons button {
        font-size: 3rem; 
        width: calc(100% / 4);
      }
    `;
  }


  
  render() {
    return html`
      <div class="calculator">
        <input class="display" rows="1" columns="20" value="${this.displayValue}" readonly>
        <div class="buttons">
          <button @click="${this._reset}">C</button>
          <button></button> 
          <button data-value="/" @click="${this._typeValue}">/</button>
          <button data-value="*" @click="${this._typeValue}">*</button>
          <button data-value="7" @click="${this._typeValue}">7</button>
          <button data-value="8" @click="${this._typeValue}">8</button>
          <button data-value="9" @click="${this._typeValue}">9</button>
          <button data-value="-" @click="${this._typeValue}">-</button>
          <button data-value="4" @click="${this._typeValue}">4</button>
          <button data-value="5" @click="${this._typeValue}">5</button>
          <button data-value="6" @click="${this._typeValue}">6</button>
          <button data-value="+" @click="${this._typeValue}">+</button>
          <button data-value="1" @click="${this._typeValue}">1</button>
          <button data-value="2" @click="${this._typeValue}">2</button>
          <button data-value="3" @click="${this._typeValue}">3</button>
          <button @click="${this._greting}">🥹</button>
          <button data-value="0" @click="${this._typeValue}">0</button>
          <button data-value="." @click="${this._typeValue}">.</button>
          <button @click="${this._delete}"><</button>
          <button @click="${this._result}">=</button>
        </div>
      </div>
    `;
  }
}

