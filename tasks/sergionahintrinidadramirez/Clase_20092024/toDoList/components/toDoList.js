import { LitElement, html } from 'lit';
import { styleToDoList } from './styles/styleToDoList.js';
import './toDoItem';
export class ToDoList extends LitElement {
  static properties = {
    tasks: { type: Array },
  };

  static styles = styleToDoList;

  constructor() {
    super();
    this.tasks = []; 
  }

  addTask() {
    const input = this.shadowRoot.querySelector('#taskInput');
    if (input.value.trim()) {
      this.tasks = [...this.tasks, { text: input.value.trim(), isEditing: false }];
      input.value = '';
    }
  }

  updateTask(index, newText) {
    this.tasks = this.tasks.map((task, i) =>
      i === index ? { ...task, text: newText, isEditing: false } : task
    );
  }

  deleteTask(index) {
    this.tasks = this.tasks.filter((_, i) => i !== index);
  }

  toggleEdit(index) {
    this.tasks = this.tasks.map((task, i) =>
      i === index ? { ...task, isEditing: !task.isEditing } : { ...task, isEditing: false }
    );
  }

  render() {
    console.log('tasks:', this.tasks); // Verifica el valor de tasks para depuración
    return html`
      <div class="container">
        <h1>To-Do List</h1>
        <div class="input-container">
          <input id="taskInput" type="text" placeholder="Nueva tarea..." />
          <button @click="${this.addTask}">Añadir</button>
        </div>
        <ul>
          ${Array.isArray(this.tasks) ? this.tasks.map(
            (task, index) => html`
              <litem-app
                .task="${task}"
                .index="${index}"
                @update-task="${(e) => this.updateTask(index, e.detail)}"
                @delete-task="${() => this.deleteTask(index)}"
                @toggle-edit="${() => this.toggleEdit(index)}"
              ></litem-app>
            `
          ) : html`<p>No hay tareas</p>`}
        </ul>
      </div>
    `;
  }
}