import {LitElement,html, css } from "lit";

export class LoginComponent extends LitElement{

  constructor(){
    super();
    this.email = '';
    this.password = '';
    this.errorMessage = '';
    
  }
  static get properties(){
    return {
      email: {type: String},
      password: {type: String},
      errorMessage: {type: String},
    }
  }

  
  static get styles(){
    return css`
    *{
      color:#FFF;
      margin:0px;
      padding:0px;
      font-family: "Open Sans", sans-serif;
    }
    .error{
    color:red;
    font-size:12px;
    }
    form{
      
      height: 100vh;
      background-color:#00438A;
      display:flex;
      flex-direction: column;
      align-items:center;
    }
    img{
      width:100%;
    }
    section{
    padding: 50px 0px;
    }
    h2{
    text-align:center;
    font-size:30px;
    font-weight: 400;

    }
    div{
    display: flex;
    flex-direction:column;
    padding:30px 0px;
    }
    input{
        padding: 10px 150px 10px 0px;
        margin: 10px 0px;
        background-color: transparent;
        border-bottom-color: white;
        border-right-color: transparent;
        border-left-color: transparent;
        border-top-color: transparent;

    }
    input::placeholder{
    color:white;
    text-aling: start;
    font-size: 16px;
    }

    button{
    margin: 10px 0px;
    padding: 10px 20px;
    background-color:#1975A6;
    border-color:transparent;
    }
    
    `
  }
  render(){
    return html`
  
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <form @submit = "${this._handleSubmit}">
  
      <img src="./images/family.jpg"> 
    
      <section>
        <h2>Hola<h2>
        <div>
          <input type="email" name="email" id="email" placeholder="Correo Electronico" .value ="{this.email}" @input="${e => this.email = e.target.value}" required>
          <input type="password" id="password" name="password" placeholder="Contraseña" .value ="{this.password}" @input="${e => this.password = e.target.value}"required>
          <button type="submit"> Iniciar Sesión </button>
          ${this.errorMessage ? html`<p class="error">${this.errorMessage}</p>` : ''}
        </div>
      </section>
    </form>
    `;
  }

  _handleSubmit(e){
    e.preventDefault();
   this._validateLogin();
  }
  _validateLogin() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //Validar el formato de correo 
    if(!emailPattern.test(this.email)){
      this.errorMessage = 'Formato de correo invalido';
      return;
    }
    //Validar contraseña igual a 'admin'
    if(this.password !== 'admin'){
      this.errorMessage = 'Contraseña incorrecta. La contraseña por default es admin';
      console.log(this.errorMessage);
      return;
    }
    //Si todo es valido, se realiza un autenticacion simulada

    //this.errorMessage = '';
    this._simulateLogin(this.email,this.password);
  }

  _simulateLogin(email, password){
    //Simular peticion al servidor
    setTimeout(()=>{
      if(email && password){
        this.dispatchEvent(new CustomEvent('authenticated'));//Evento para cambiar a dashboard
      }
    },1000)//Simula una espera de 1 segundo
  }
}
customElements.define('login-component',LoginComponent);
