export class MyProyect extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.login=false;
        this.user="";
        this.password="";
        this.button=null;
        this.users=null;
        this.account="";
        this.quantity=0;
        this.name="";
        this.lastName="";
        this.email="";
        this.telefono="";
    }

    connectedCallback(){
        this.render();
        document.title="BBVA";
    }

    loginContent(){
        return `
            <style>
                section{
                    padding: 1rem;
                    background-color: #ECF0F1;
                    border-radius: 5%;
                    text-align:center;
                }
                div,button{
                    margin: 1rem 0rem;
                }

                button, input{
                    padding: 0.8rem;
                }
                
                #bbva{
                    color: #2874A6;
                }
            
            </style>
            <section>
                <h1 id="bbva">BBVA App</h1>
                <h1>Ingresa tus credenciales:</h1>
                <div>
                    <label for="usuario">Usuario:</label>
                    <input type="text" id="usuario" placeholder="usuario"/>
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="password"/>
                </div>
                <button id="idButton">Iniciar sesión</button>
            </section>
        `;
    }

    async bringUsers(){
        
        const data=  await fetch("./Users/users.json");;
        const result= await data.json();
        
        return result.users;
    }

    checkIfExists(array, userGiven, passwordGiven){

        let token=0;
        for (const element of array) {
            if(element.name===userGiven && element.password===passwordGiven){
                token=element;
            }
        }
        return token;
    }

    mostrarDashboard(){
        const dashboard = document.querySelector('my-dashboard');
        const details= document.querySelector('my-details');

        const shadow = dashboard.shadowRoot;
        const shadowDetails= details.shadowRoot;

        if(shadow){
            // Mostrar el dashboard
            dashboard.style.display = 'block';
            //Oculta el login
            this.style.display='none';
            document.title='Dashboard BBVA'


            shadow.getElementById("usuario").innerHTML=this.user.value;
            shadow.getElementById("account").innerHTML=this.account.replace(/[a-zA-Z0-9]{7}/gm, "XXXXXXX");
            shadow.getElementById("quantity").innerHTML=this.quantity;

            this.user.value="";
            this.password.value="";


            if(shadowDetails){
                shadowDetails.getElementById("account").innerHTML=this.account;
                shadowDetails.getElementById("name").innerHTML=this.name;
                shadowDetails.getElementById("lastName").innerHTML=this.lastName;
                shadowDetails.getElementById("email").innerHTML=this.email;
                shadowDetails.getElementById("telefono").innerHTML=this.telefono;
            }
                
            
        }else{
            console.log("No se encntró el shadow root del elemento");
        }
        
            
    }


    render(){
        this.shadowRoot.innerHTML= this.loginContent();
        this.button=this.shadowRoot.getElementById("idButton");
        this.user=this.shadowRoot.getElementById("usuario");
        this.password=this.shadowRoot.getElementById("password");


        this.button.addEventListener("click", async ()=>{

            const arrayUsers= await this.bringUsers();
            const userOr0=this.checkIfExists(arrayUsers, this.user.value ,this.password.value);
            
            if(userOr0!==0){
                this.login=true;
                this.account=userOr0.account;
                this.quantity=userOr0.quantity;
                this.name=userOr0.name;
                this.lastName=userOr0.lastName;
                this.email=userOr0.email;
                this.telefono=userOr0.telefono;
                this.mostrarDashboard();
            }else{
                alert("Usuario o password incorrectos!");
                this.user.value="";
                this.password.value="";
            }
        })

    }
}

