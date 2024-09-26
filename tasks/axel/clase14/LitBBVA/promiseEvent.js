export function promiseEvent(){
    const promesa = new Promise((resolve, reject) =>{
        setTimeout(()=> resolve("succes"), 3000)
    })

    promesa
        .then((msj)=>{
            this.my_login = document.querySelector('my-login');
            this.my_login.style.display = "none"
            const myCardElement = document.querySelector('my-cards')
            myCardElement.style.display = "block"
            const login = this.shadowRoot.getElementById("loaderr")
            login.style.display="none"
            const inputPass = this.shadowRoot.getElementById("valueContraseña")
            inputPass.style.display="block"
            const forgotPassword = this.shadowRoot.querySelector('a')
            forgotPassword.style.display="block"
            const btn = this.shadowRoot.getElementById("inicioSesion")
            btn.style.display="block"


        })
}

export default{
    promiseEvent
};