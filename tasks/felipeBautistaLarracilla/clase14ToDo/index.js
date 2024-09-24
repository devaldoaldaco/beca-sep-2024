import { LitElement, html, css } from 'lit';

class ToDoApp extends LitElement {
  static properties = {
    todos: { type: Array },
    editIndex: { type: Number },
  };

  static styles = css`
  *{
      font-size: 20px;
      font-family:sans-serif;
  
  }  
  h1 {
      background-color: #063940;
      padding: 30px;
      margin: 0px;
      color:#FFF;
      font-size: 40px;
    }
    main{
      background-color:#ece1c3;
      height:100vh;
    }
    #newTodo{
      padding: 10px 30px;
      border: none;
      border-radius: 5px;
    }
    #addTodo{
      padding: 10px 20px;
      border: transparent;
      border-radius: 5px;
      background-color: #3e838c;
      color:#FFF;


    }
    #putNewTodo{
      margin: 10px;
    }
    .todo {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      border-bottom: 1px solid #ddd;
      background-color: #efece2;
      border-radius:5px;

    }
    .completed {
      text-decoration: line-through;
      text-decoration-color:red;
    }
    button {
      margin-left: 8px;
    }
    input[type="text"] {
      flex-grow: 1;
      margin-right: 8px;
    }
    #delete{
      color:#FFF;
      background-color: red;
      border:transparent;
      border-radius:5px;
      padding: 6px 20px;
    }
    #edit{
      color:#FFF;
      background-color: orange;
      border:transparent;
      border-radius:5px;
      padding:6px 20px;

    }
    #editTodo{
      border:1px green solid;
      border-radius:5px;
    }

    #save{
      color:#FFF;
      background-color: green;
      border:transparent;
      border-radius:5px;
      padding:6px 20px;
    }
    #cancel{
      background-color: yellow;
      border:transparent;
      border-radius:5px;
      padding:6px 20px;

    }
  `;

  constructor() {
    super();
    this.todos = [];
    this.editIndex = -1;
  }

  addTodo() {
    const input = this.renderRoot.querySelector('#newTodo');
    if (input.value.trim()) {
      this.todos = [...this.todos, { text: input.value.trim(), completed: false }];
      input.value = '';
    }
  }

  deleteTodo(index) {
    this.todos = this.todos.filter((_, i) => i !== index);
    if (this.todos.length === 0) {
      alert('No hay más actividades por eliminar');
    }
  }

  toggleComplete(index) {
    this.todos = this.todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
  }

  editTodo(index) {
    this.editIndex = index;
  }

  updateTodo() {
    const input = this.renderRoot.querySelector('#editTodo');
    if (input.value.trim()) {
      this.todos = this.todos.map((todo, i) =>
        i === this.editIndex ? { ...todo, text: input.value.trim() } : todo
      );
      this.editIndex = -1;
    }
  }

  cancelEdit() {
    this.editIndex = -1;
  }

  render() {
    return html`
      <main>
      
        <h1>To-Do List</h1>
        <div id="putNewTodo">
          <input id="newTodo" type="text" placeholder="Nueva actividad" />
          <button id="addTodo" @click=${this.addTodo}>Agregar</button>
        </div>
        <ul>
          ${this.todos.map(
            (todo, index) => html`
              <li class="todo ${todo.completed ? 'completed' : ''}">
                ${this.editIndex === index
                  ? html`
                      <input id="editTodo" type="text" .value=${todo.text} />
                      <button id="save" @click=${this.updateTodo}>Guardar</button>
                      <button id="cancel" @click=${this.cancelEdit}>Cancelar</button>
                    `
                  : html`
                      <span @click=${() => this.toggleComplete(index)}>
                        ${todo.text}
                      </span>
                      <button id="edit" @click=${() => this.editTodo(index)}>Editar</button>
                      <button id="delete" @click=${() => this.deleteTodo(index)}>Eliminar</button>
                    `}
              </li>
            `
          )}
        </ul>
      </main>
    `;
  }
}

customElements.define('to-do-app', ToDoApp);