import { LitElement, html, css } from "lit";
import { GeneralStyles } from "./styles";

export class ToDoList extends LitElement{

    constructor(){
        super();
        this.name='somebody';
        this.list=["task 1","task 2","task 3"];
    }

    static properties={
        name: { type: String },
        list: {type: Array}
    }

    render(){
        return html`
        
            <h3>Hi <span>${this.name}</span>, this is your to-do list!</h3>
            <Label For="task">Task to do:</Label>
            <input type="text" id="task" placeholder="description of task to do" />
            <button @click="${this._addtask}">Add task</button>
            <p style="display:none">Length must be min 5 characters and max 30</p>
            <section>
                <table>
                    <tr>
                        <th>Task to do</th>
                        <th>Push to modify</th>
                        <th>Push to delete</th>
                    </tr>
                    ${this.list.length===0 ? 
                        html`<tr><td>You finished all your tasks!</td><td>-</td><td>-</td></tr>` :
                        html` 
                            ${this.list.map((element,index)=>html`<tr><td class="realTask">${element}</td>
                                                            <td><button key="${index}" @click="${this._modifyTask}">Modify</button></td>
                                                            <td><button key="${index}" @click="${this._deleteTask}">Delete</button></td>
                                                            </tr>`)}
                        `
                    }
                </table>
            </section>
            
            `
    }

    _addtask(e){
        
        let task=this.renderRoot.querySelector('input').value;
        let par=this.renderRoot.querySelector('p');

        if(task.length>3 && task.length<30){
            this.list=[...this.list, task];
            par.style.display="none";
        }else{
            par.style.display="block";
        }
        this.renderRoot.querySelector('input').value="";
    }

    //1 underscore means private, 2 means protected
    _modifyTask(e){   

        let task=this.renderRoot.querySelector('input').value;
        let par=this.renderRoot.querySelector('p');

        let toModify=e.target.getAttribute("key");

        if(task.length>3 && task.length<30){

            this.list.splice(toModify, 1, task);
            this.list=[...this.list];
            par.style.display="none";

        }else{
            par.style.display="block";
        }
        this.renderRoot.querySelector('input').value="";
        
    }

    _deleteTask(e){

        let toDelete=e.target.getAttribute("key");

        this.list.splice(toDelete, 1);
        this.list=[...this.list];

        this.renderRoot.querySelector('input').value="";

    }


    static styles = [
        GeneralStyles,
        css`
            span{
                color: blue;
            }
            `
    ]
}

