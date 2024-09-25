import { LitElement, html, css } from 'lit';

class TodoList extends LitElement {
  static styles = css`
    ul {
      list-style-type: none; 
      padding: 0; 
    }
    li {
      margin: 5px 0; 
      display: flex; 
      justify-content: space-between; 
      align-items: center;
    }
  `;

  static properties = {
    todos: { type: Array }
  };

  constructor() {
    super();
    this.todos = [];
  }

  // Método para añadir una nueva tarea
  addTodo() {
    const input = this.shadowRoot.getElementById('todo-input'); // Obtener el input de la tarea
    if (input.value) { // Comprobar si hay texto en el input
      // Añadir la nueva tarea al array 'todos'
      this.todos = [...this.todos, { text: input.value, editing: false }];
      input.value = ''; // Limpiar el input después de añadir
    }
  }

  // Método para editar una tarea existente
  editTodo(index) {
    const input = this.shadowRoot.getElementById(`edit-input-${index}`); // Obtener el input
    if (input.value) { // Comprobar si hay texto en el input
      // Actualizar el texto de la tarea y marcar como no editando
      this.todos[index].text = input.value;//Obtiene el valor del input para editar 
      this.todos[index].editing = false;// Se cambia el estado de en edicion a FALSO
      this.todos = [...this.todos]; // Actualizar el estado
    }
  }

  // Método para eliminar una tarea
  deleteTodo(index) {
    this.todos = this.todos.filter((_, i) => i !== index); // Filtrar la tarea a eliminar
  }

  // Método para alternar el estado de edición de una tarea
  iniciarEdit(index) {
    this.todos[index].editing = !this.todos[index].editing; // Cambiar el estado de edición
    this.todos = [...this.todos]; // Actualizar el estado
  }

  render() {
    return html`
      <h1>Todo List</h1>
      <input type="text" id="todo-input" placeholder="Añadir tarea" /> 
      <button @click=${this.addTodo}>Añadir</button> 
      ${this.todos.length === 0 
        ? html`<h2>No Hay Tareas Disponibles</h2>` 
        : html`<ul> 
            ${this.todos.map((todo, index) => html`
              <li>
                ${todo.editing 
                  ? html`<input type="text" id="edit-input-${index}" .value="${todo.text}" />` 
                  : html`<span>${todo.text}</span>` 
                }
                <div>
                  ${todo.editing 
                    ? html`<button @click=${() => this.editTodo(index)}>Guardar</button>`
                    : html`<button @click=${() => this.iniciarEdit(index)}>Editar</button>` 
                  }
                  <button @click=${() => this.deleteTodo(index)}>Eliminar</button>
                </div>
              </li>
            `)}
          </ul>`}
    `;
  }
}

// Definición del elemento personalizado
customElements.define('todo-list', TodoList);