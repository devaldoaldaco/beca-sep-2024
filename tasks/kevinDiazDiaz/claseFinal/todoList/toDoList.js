import { LitElement, html } from "lit";
import { toDoListStyles } from "./toDoListStyles";

export class ToDoList extends LitElement {
    constructor() {
        super();
        this.tasks = [];
    }

    static properties = {
        tasks: { type: Array },
    };

    static styles = toDoListStyles;

    render() {
        return html`
            <main>
                <h1>To Do List</h1>
                <hr>
                <section id="inputSection">
                    <input type="text" id="taskInput" placeholder="Añade una tarea">
                    <button id="addButton" @click="${this._addTask}">Añadir tarea</button>
                </section>
                <section id="taskSection">
                    ${this.tasks.map((task, index) => html`
                        <section class="task">
                            <span class="text">${task}</span>
                            <section class="buttonSection">
                                <button @click="${() => this._editTask(index)}">Editar</button>
                                <button @click="${() => this._deleteTask(index)}">Eliminar</button>
                            </section>
                        </section>
                    `)}
                </section>
            </main>
        `;
    }

    _addTask() {
        const input = this.shadowRoot.getElementById('taskInput');
        const taskText = input.value.trim();
        if (taskText === '') return;

        this.tasks = [...this.tasks, taskText];
        input.value = '';
    }

    _editTask(index) {
        const newTask = prompt('Edita la tarea:', this.tasks[index]);
        if (newTask) {
            this.tasks = this.tasks.map((task, i) => i === index ? newTask : task);
        }
    }

    _deleteTask(index) {
        this.tasks = this.tasks.filter((_, i) => i !== index);
    }
}
