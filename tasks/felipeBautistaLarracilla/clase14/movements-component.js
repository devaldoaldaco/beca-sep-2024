import { LitElement,html,css } from "lit";

export class MovementsComponent extends LitElement{
  constructor (){
    super();
  }

  static get styles (){
    return css`
    *{
    margin:0px;
    paddin:0px;
    }
    main{
    font-family: "Open Sans", sans-serif;
    }
    
    header h2{
      padding-top:30px;
      color:white;
      display:flex;
      flex-direction: row;
      justify-content: center;
      
      }
      
      header{
      wight:100%;
      height: 10vh;
      background-color:#031C3F;
      color: white; 
      font-size:15px
      }
  
      article{
      color: black;
      }
      .account{
      padding: 10px;
      color:black;
     
      }
      
      #principal-account{
      margin-top:10px;
        padding: 15px 5px 0px 5px;
        border-radius:5px;
        background-color: aliceblue;
        display:flex;
        justify-content: space-between;
        height: 10vh;
    
      }
    
      #principal-account h2{
      font-size: 20px;
      color:#1773B7;
      }
    
      #principal-account h3{
      font-size: 20px;
      color:black;
      }
      #principal-account span{
      font-size: 20px;
      color:black;
      }
      input{
      margin-top:20px;
      padding: 10px 30px;
      background-color:#00A4A6;
      border:none;
      border-radius:5px;
      color:white;
      font-size:20px;
      }

       div h3{
        text-align: right;
      }

    `;
  }

  render(){
    return html`
      <main>
      <header>
        <h2>Movimientos</h2>
      </header>
      <article>
        <div class ="account">
          <h3> Historial de Movimientos</h3>
          <div>
            <div id="principal-account">
              <div>
                <h2>Google Play</h2>
                <span>10 de Septiembre</span>
              </div>
              <div>
                <h3> $600.00</h3>
                <span>Liquidada</span>
              </div>
            </div>
            <div id="principal-account">
              <div>
                <h2>Walmart</h2>
                <span>15 de Septiembre</span>
              </div>
              <div>
                <h3> $1,300.00</h3>
                <span>Liquidada</span>
              </div>
            </div>
            <div id="principal-account">
              <div>
                <h2>Spei enviado nu mexico</h2>
                <span>18 de Septiembre</span>
              </div>
              <div>
                <h3> $9,000.00</h3>
                <span>Transferencia</span>
              </div>
            </div>
            <div id="principal-account">
              <div>
                <h2>Pago cuenta de tercero</h2>
                <span>20 de Septiembre</span>
              </div>
              <div>
                <h3> $1,300.00</h3>
                <span>Movimiento</span>
              </div>
            </div>
            <div id="principal-account">
              <div>
                <h2>Pado de tarjeta de credito</h2>
                <span>25 de Septiembre</span>
              </div>
              <div>
                <h3> $9,850.00</h3>
                <span>Movimiento</span>
              </div>
            </div>
          </div>
          <input type="submit" @click="${this._goBack}" value="Regresar"></input>
        </div>
      </article>
    </main>
      `;
  }
  _goBack(){
    this.dispatchEvent(new CustomEvent('go-back'));
    console.log('si funciona')
  }
}

customElements.define('movements-component',MovementsComponent);