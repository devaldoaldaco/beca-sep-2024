
export function mostrarActividad(){
    if (this.activity.trim() !== ''){
        const nuevaActividad = document.createElement('li')
        const textoDeActividad = document.createElement('span')
        textoDeActividad.textContent = this.activity;
        const btnDelete = document.createElement('button')
        btnDelete.textContent = 'Delete'
        btnDelete.id = 'btnDelete'
        btnDelete.addEventListener("click", function(){
            nuevaActividad.remove();
        })
        const btnEdit = document.createElement("button")
        btnEdit.textContent = "Editar"
        btnEdit.id="btnEdit"
        btnEdit.addEventListener("click", ()=>{
            const btnAceptar = this.shadowRoot.getElementById("btnAgregar")
            btnAceptar.style.display="none"
            this.activity = textoDeActividad.textContent
            const botonAcceptEdit = document.createElement('button')
            const mainBtn = this.shadowRoot.getElementById("main")
            botonAcceptEdit.textContent="Aceptar"
            botonAcceptEdit.id="btnAceptarEdit"
            mainBtn.appendChild(botonAcceptEdit)
            botonAcceptEdit.addEventListener("click", ()=>{
                textoDeActividad.textContent = this.activity;
                this.activity='';
                botonAcceptEdit.remove()
                btnAceptar.style.display="inline"
            })
            
        })


        nuevaActividad.appendChild(textoDeActividad)
        nuevaActividad.appendChild(btnDelete)
        nuevaActividad.appendChild(btnEdit)

        const list = this.shadowRoot.getElementById("listaActividades")
        list.appendChild(nuevaActividad)


        this.activity = '';
    }    
};

export default{
    mostrarActividad
};