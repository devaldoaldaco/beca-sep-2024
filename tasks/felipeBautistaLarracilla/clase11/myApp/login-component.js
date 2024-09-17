export class Login extends HTMLElement{
  constructor(){
    super()
    this.email = '';
    this.emailInput = '';
    this.password = '';
    this.passwordInput = ''; 
    this.button = null;
    this.review = '';
    this.attachShadow({mode:'open'});
  } 
 
  connectedCallback(){
    this.render();
    this.login();

  }

  render(){
    this.shadowRoot.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
     <link rel="stylesheet" href="style-login.css">
    <div class="wrapper">
    <div class="container main">
        <div class="row">
            <div class="col-md-6 side-image">
                       
                <!-------------      image     ------------->
                
                
                <div class="text">
                    <p>Bienvenido</p>
                </div>
                
            </div>
            <div class="col-md-6 right">
                
                <div class="input-box">
                   
                   <header>Create account</header>
                   <div class="input-field">
                        <input type="text" class="input" id="email" required="" name="email" autocomplete="off">
                        <label for="email">Email</label> 
                    </div> 
                   <div class="input-field">
                        <input type="password" class="input" id="pass" name="password" required="">
                        <label for="pass">Password</label>
                    </div> 
                   <div class="input-field">
                        
                        <input id="signup" type="submit" class="submit" value="Sign Up">
                   </div> 
                   <div class="signin">
                    <span>Already have an account? <a href="#">Log in here</a></span>
                   </div>
                </div>  
            </div>
        </div>
    </div>
</div>

    `;
    
  }
  login(){
    this.email = this.shadowRoot.getElementById("email");
    this.password = this.shadowRoot.getElementById("pass");
    this.button = this.shadowRoot.getElementById("signup");

      this.email.addEventListener('input', () =>{
      this.emailInput = this.email.value;
      //console.log(this.emailInput);
    
    });

    this.password.addEventListener('input', () =>{
      this.passwordInput = this.password.value;
      //console.log(this.passwordInput);
      
    });
    this.button.addEventListener('click', this.validacion.bind(this));
    }

    validacion(){
      if(this.emailInput == 'correo@correo.com' && this.passwordInput == '12345'){
        console.log('bienvenido');
       this.shadowRoot.innerHTML = `<component-dashboard></component-dashboard>`;
      }else{
        console.log('Usuario invalido');
        console.log(this.emailInput);
        console.log(this.passwordInput);
      }
    }

   

}