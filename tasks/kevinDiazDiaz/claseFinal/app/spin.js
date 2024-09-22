import { LitElement, html } from "lit";
import { spinStyles } from "./spinStyles";

export class SpinPage extends LitElement{
    constructor(){
        super();
        this.state=false;
    }

    static properties = {
        state: {
            type: Boolean       
        }
    };

    static styles = spinStyles;

    render(){
        return html`
        ${this.state ? html`
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        ` : html``}
        `};

    _spinOut(){
        this.dispatchEvent(new CustomEvent('spinOut'));
    }
}