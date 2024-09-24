import {LitElement, html, css} from "lit";

export class MyNotas extends LitElement{
    static get properties(){
        return {
            pop: {
                attribute: 'pop',
                type: Boolean
            },
            i:{
                attribute: 'i',
                type: Number
            },
            add_nota:{
                attribute: 'add_nota',
                type: String
            },
            update_nota:{
                attribute: 'update_nota',
                type: String
            },
            my_notas: {
                attribute: 'my_nota',
                type: Array
            }
          };
    }
    constructor(){
        super();
        this.i = 0;
        this.pop = true;
        this.add_nota = "";
        this.update_nota = "";
        this.my_notas = [
            "Hacer mi tarea",
            "Labores de la casa"
        ];
    }
    static get styles(){
        return css`
            .task{
                width: 50%;
                margin: 15px 60px;
                border: 2px solid rgba(255, 255, 255, 0.5);
                padding: 15px;
                box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                background-color: white;
                position: absolute;
                top: 50%;
                left: 45%;
                transform: translate(-50%, -50%);
            }
            .add-task{
                display: flex;
                justify-content: space-between;
                width: 100%
            }
            input{
                width: 70%;
                height: 40px;
                border-radius: 5px;
                font-size: 20px;
            }
            input::-webkit-input-placeholder {
                text-align: center;
                line-height: 100px;
            }
            .button-blue{
                background-color: #2B6BEA;
                color: white;
                width: 25%;
                height: 45px;
                border: 0;
                border-radius: 5px;
                font-size: 20px;
            }
            .table-task{
                margin: 10% 0 0 0;
            }
            table{
                width: 100%;
                border-spacing: 0px 5px;
                font-size: 20px;
            }
            thead{
                background-color: #2B6BEA;
                color: #ffffff;
                text-align: middle;
                height: 40px;
            }
            tbody{
                background-color: #C3E3E7;
                color: black;
                text-align: middle;
                font-weight: bold;
            }
            tbody > tr{
                height: 40px;
            }
            #popup-window {
                position: absolute;
                left: 20%;
                top: 35%;
                width: 60%;
                height: 300px;
                background: #474747;
                margin: auto;
                z-index: 2;
                box-shadow: 0 8px 10px rgba(0, 0, 0, 0.4);
            } 
            #popup-window > section{
                position: absolute;
                width: 100%;
                top: 15%;
                text-align: center;
            }
            #popup-window > section > h1{
                color: white;
                font-size: 30px;
            }
            .buttons{
                margin: 3% 0 0 0;
            }
            .buttons > button{
                font-size: 20px;
                margin: 0 2% 0 0;
                font-size: 20px;
                height: 40px;
                border-radius: 10px;
            }
        `;
    }
    handleInput(e) {
        this.add_nota = e.target.value;
    }
    addTask(){
        this.my_notas = [...this.my_notas, this.add_nota];
        this.add_nota = "";
    }
    editNota(name_nota){
        this.update_nota = name_nota.target.value;
        this.i = this.my_notas.indexOf(name_nota.target.value);
        this.pop = false;
    }
    updateNota(){
        this.my_notas.splice(this.i, 1, this.add_nota)
        console.log(this.my_notas)
        this.add_nota = "";
        this.i = 0;
        this.pop = true;
    }
    closeEditNota(){
        this.add_nota = "";
        this.i = 0;
        this.pop = true;
    }
    deleteNota(name_nota){
        this.my_notas = this.my_notas.filter((nota) => nota !== name_nota.target.value)
    }
    render(){
        return html`
            <div class="task">
                <section class="add-task">
                    <input placeholder="Agrega tu tarea" .value=${this.add_nota} @input=${this.handleInput}>
                    <button class="button-blue" @click="${this.addTask}">Agrega</button>
                </section>
                <section class="table-task">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre de la tarea</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.my_notas.map((nota) => html`
                                <tr>
                                    <th>${nota}</th>
                                    <th>
                                        <button class="button-blue" .value=${nota} @click="${this.editNota}">Edit</button>
                                        <button class="button-blue" .value=${nota} @click="${this.deleteNota}">Delete</button>
                                    </th>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </section>
            </div>
            <div ?hidden="${this.pop}" id="popup-window">
                <section>
                    <h1>Actualizar la nota: ${this.update_nota}</h1>
                    <input placeholder="Actualiza tu tarea" .value=${this.add_nota} @input=${this.handleInput}>
                    <div class="buttons">
                        <button @click="${this.closeEditNota}" id="close-button">Cerrar</button>
                        <button @click="${this.updateNota}">Actualizar</button>
                    </div>
                </section>
            </div>  
        `;
    }
}