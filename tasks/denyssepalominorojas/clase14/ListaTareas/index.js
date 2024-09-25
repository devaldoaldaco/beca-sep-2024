
import { LitElement, html, css } from 'lit';

export class ActivityList extends LitElement {
    static properties = {
        actividades: { type: Array },
        nuevaActividad: { type: String },
        editarIndex: { type: Number },
        editarActividad: { type: String },
    };

    constructor() {
        super();
        this.actividades = [];
        this.nuevaActividad = '';
        this.editarIndex = null;
        this.editarActividad = '';
    }

    static styles = css`
        :host {
            display: block;
            padding: 20px;
            max-width: 400px;
            margin: auto;
            background-color: #fff310a9;
            border: 1px solid #ccc;
            border-radius: 20px;
        }

        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        
        input {
            width: 300px;
            background-color:  #a7d69dc5;
            border: 0.5px solid black;
            border-radius: 10px;
        }

        h1, h4 {
            text-align: center;
            color: #456e3c;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #81c366;
        }
        button {
            margin-left: 10px;
            cursor: pointer;
        }

        .no-actividades {
            color: #447c37;
        }
    `;

    render() {
        return html`
            <h1>Actividades</h1>
            <h4>DPR</h4>
            <input type="text" .value=${this.editarIndex !== null ? this.editarActividad : this.nuevaActividad} 
                   @input=${this.cambioInput} placeholder="Agrega una actividad / actividad...">
            <button @click=${this.editarIndex !== null ? this.actualizar : this.agregar}>
                ${this.editarIndex !== null ? 'Actualizar' : 'Agregar'}
            </button>
            <ul>
                ${this.actividades.length === 0 
                    ? html`<li class="no-actividades">No hay actividades o tareas por hacer ツ</li>` 
                    : this.actividades.map((actividad, index) => html`
                        <li>
                            ${actividad}
                            <div>
                                <button @click=${() => this.editar(index)}>Editar</button>
                                <button @click=${() => this.eliminar(index)}>Eliminar</button>
                            </div>
                        </li>
                    `)}
            </ul>
        `;
    }
    
    //placeholer proporciona una sugerencia o ejemplo de lo que se espera que el usuario ingrese en ese input
    
    cambioInput(event) {
        if (this.editarIndex !== null) {
            this.editarActividad = event.target.value; // Actualiza si se esta editando una actividad
        } else {
            this.nuevaActividad = event.target.value; // Si no, se actualiza el agregar una nueva actividad
        }
    }

    // Agrega una nueva actividad a la lista
    agregar() {
        // Verifica que la actividad no esté vacía y la agregar a actividades, después limpia nuevaActividad.
        if (this.nuevaActividad === '') return; 
        this.actividades = [...this.actividades, this.nuevaActividad];
        this.nuevaActividad = '';
    }

    // Editar una actividad específica
    editar(index) {
        this.editarIndex = index;
        this.editarActividad = this.actividades[index];
        this.nuevaActividad = ''; 
    }

    // Actualizar la actividad que se está editando
    actualizar() {
        if (this.editarActividad === '') return;
        this.actividades[this.editarIndex] = this.editarActividad;
        this.resetEdit();
    }

    // Eliminar la  actividad de la lista 
    eliminar(index) {
        // método filter para crear una nueva lista con todas las ctividades
        // excepto el índice index
        this.actividades = this.actividades.filter((_, i) => i !== index);
    }

    // Restablece las variables relacionadas con la edición de actividades
    resetEdit() {
        this.editarIndex = null;
        this.editarActividad = '';
        this.nuevaActividad = '';
    }
}
