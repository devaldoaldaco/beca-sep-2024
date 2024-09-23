import { ToDoListItem } from "./components/toDoItem";
import { ToDoList } from "./components/toDoList";

window.customElements.define("list-app", ToDoList);
window.customElements.define("litem-app", ToDoListItem);

