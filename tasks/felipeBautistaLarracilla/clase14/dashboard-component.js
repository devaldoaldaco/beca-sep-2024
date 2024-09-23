import { LitElement, html, css } from "lit";

export class DashboardComponent extends LitElement{
  constructor(){
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
  #Transferir{
  padding: 20px;
  width:20px;
  border-radius: 50%;
  background-color:#3080BE;
  }
  #Oportunidades{ 
  width:20px;
  padding: 20px;
  border-radius:50%;
  background-color:#F7893C;
  }
  #Retiro{
  padding: 20px;
  width:20px;
  border-radius:50%;
  background-color:#00A4A6;
  }

  
  header{
  wight:100%;
  height: 25vh;
  background-color:#031C3F;
  color: white; 
  font-size:15px

  }
  section{
  display:flex;
  justify-content: space-around;
  }
  section div{
  align-items:center;
  width: 120px;
  display: flex;
  flex-direction: column;
  margin-top:10px
  }
  section p{
  padding-top:10px;
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
        <h2>Hola</h2>
        <section>
          <div>
            <div id="Transferir">
              <img src="./iconos_bbva/transferir.png" width ="20px" alt="">
            </div>
            <p>Transferir</p>
          </div>
          <div>
            <div id="Oportunidades">
              <img src="./iconos_bbva/mas.png" width ="20px" alt="">
            </div>
            <p>Oportunidades</p>
          </div>
          <div>
            <div id="Retiro">
              <img src="./iconos_bbva/retiro.png" width ="20px" alt="">
            </div>
            <p>Retiro sin tarjeta<p>  
          </div>
        </section>  
      </header>
      <article>
        <div class ="account">
          <h3> CUENTAS EN PESOS</h3>
          <div>
            <div id="principal-account" @click="${this._viewMovements}">
              <div>
                <h2>001ah2644</h2>
                <span>.22644</span>
              </div>
              <div>
                <h3> $60,000,00</h3>
                <span>Saldo disponible</span>
              </div>
            </div>
            <div id="principal-account" @click="${this._viewMovements_2}">
              <div>
                <h2>001ah9874</h2>
                <span>.29874</span>
              </div>
              <div>
                <h3> $90,000,00</h3>
                <span>Saldo disponible</span>
              </div>
            </div>  
          </div>
          <input type="submit" @click="${this._logout}" value="Salir"></input>
        </div>
      </article>
    </main>
  `;
}
  _viewMovements(){
    this.dispatchEvent(new CustomEvent('view-movements'));// Emite el evento para cambiar a movements
  }
  _viewMovements_2(){
    this.dispatchEvent(new CustomEvent('view-movements_2'));// Emite el evento para cambiar a movements
  }
  _logout(){
    this.dispatchEvent(new CustomEvent('logout'));//Emite el evento para cambiar a Login
  }
}
customElements.define('dashboard-component',DashboardComponent);