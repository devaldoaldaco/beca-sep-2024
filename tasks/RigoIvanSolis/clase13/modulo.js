import { LitElement,html,css } from "lit-element";

class MyCounter extends LitElement {
    constructor() {
        super(); // instanciar la clase padre. En este caso LitElement
        this.counter = 0;
    }

    // v2 y v3
   // static properties = {

    //}

    // v1
    static get properties() {
        return {
            counter: {
                atribute: 'x', //propeti options
                converter: () =>{
                    
                },
                type: Number
            }

        };

    }

    static get styles() {
        return [ css ]
    }

    render() {
        console.log(this.counter);
        return html `
            <h1>${this.counter}</h1>
        `;
    }

}

