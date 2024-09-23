import { html, LitElement, css } from 'lit';
import { styleToDoListItem } from "./styles/styleToDoItem.js"; // Asegúrate de que esta importación es correcta

export class ToDoListItem extends LitElement {
  static properties = {
    task: { type: Object }, // Cambiado a Object, ya que task es un objeto y no un array
    index: { type: Number },
  };

  static styles = styleToDoListItem; // Asegúrate de que este estilo está definido

  constructor() {
    super();
    this.task = { text: '', isEditing: false };
    this.index = -1;
  }

  toggleEdit() {
    this.dispatchEvent(new CustomEvent('toggle-edit'));
  }

  updateTask() {
    const input = this.shadowRoot.querySelector('input');
    if (input.value.trim()) {
      this.dispatchEvent(new CustomEvent('update-task', { detail: input.value.trim() }));
    }
  }

  deleteTask() {
    this.dispatchEvent(new CustomEvent('delete-task'));
  }

  render() {
    return html`
      <div class="task">
        ${this.task.isEditing
          ? html`<input type="text" .value="${this.task.text}" @blur="${this.updateTask}" />`
          : html`<span @dblclick="${this.toggleEdit}">${this.task.text}</span>`}
        <div class="buttons">
          ${this.task.isEditing
            ? html`<button @click="${this.updateTask}">Guardar</button>`
            : html`<button @click="${this.toggleEdit}">Editar</button>`}
          <button @click="${this.deleteTask}">Eliminar</button>
        </div>
      </div>
    `;
  }
}

