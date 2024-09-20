export class MyLogin extends HTMLElement{
    constructor(){
        super();
        this.valor2='';
        this.button1=null;
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    

    render(){
        this.shadowRoot.innerHTML = `
        <style>
        h1{margin-left: 30%;margin-top: 40px; color: #FEFFFA;font-size: 86px;}

        input{margin-left: 4%;background-color: #134289; border-top: none; border-left: none; border-right: none; width: 450px; color: #FEFFFA;}

        input::placeholder{color: #ABBEE0;}

        #hi{margin-left: 44%; color: #FEFFFA; font-size: 46px; margin-bottom:2%;}

        #name{margin-left: 47%; margin-top:0%;color: #FEFFFA; font-size: 30px;}
        
        a{margin-left: 40%; color: #FEFFFA;}

        button{display: block; margin-left: 33%; width: 200px; height: 50px; background-color: #2075A6; border:none; color:#FEFFFA;}

        #mainDiv{background-color: #134289; width: 500px; height: 700px; margin-left: 30%; border-radius: 10%;}

        #token{background-color: #072358;width: 250px;height: 150px;position: relative; top: 160px;border-bottom-left-radius: 10%; display:  }

        #qr{background-color: #0D3470;width: 250px;height: 150px;position: relative; top: -6px; left: 250px;border-bottom-right-radius: 10%;}

        #fP1{padding-left: 35%; padding-top: 25%;color: #FEFFFA;}
        #fP2{padding-left: 15%; padding-top: 25%;color: #FEFFFA;}

        </style>
        <div id="mainDiv">
        <h1>BBVA</h1>
        <p id = "hi">Hola</p>
        <p id ="name" >Axel</p>
        <input id = "valueContraseña" type= "text" placeholder="Contraseña"></input>
        <a>Olvide mi contraseña</a>
        <button id="inicioSesion">Entrar</button>
        <footer>
            <div id ="token">
                <p id = "fP1">Token Movil</p>
            </div>
            <div id = "qr">
                <p id = "fP2">Operaciones con codigo QR</p>
            </div>
        </footer>
        </div>

        `;

        this.button1 = this.shadowRoot.getElementById("inicioSesion");
        this.my_login = this.shadowRoot.getElementById("mainDiv");
        


        //funciones

        this.button1.addEventListener('click', () =>{
            this.valor2 = this.shadowRoot.getElementById("valueContraseña").value
            console.log(this.valor, this.valor2);
            if(this.valor2 === '123'){
                console.log("Acceso concedido")
                this.my_login.style.display = "none"
                const myCardElement = document.querySelector('my-cards')
                if(myCardElement){
                    myCardElement.style.display = "block"
                }
            }else{
                console.log("Contraseña Incorrecta")
            }
            
        });
        
    }
}


