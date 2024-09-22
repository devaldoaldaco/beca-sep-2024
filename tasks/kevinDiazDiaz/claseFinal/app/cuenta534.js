import { LitElement, html } from "lit";
import { cuentaStyles } from "./cuentaStyles";

export class Cuenta534 extends LitElement{
    constructor(){
        super();
        this.state=false;
    }

    static properties = {
        state: {
            type: Boolean       
        }
    };

    static styles = cuentaStyles;

    render(){
        return html`
        ${this.state ? html` 
            <main>
                <h1>Cuenta de terminación .534</h1>
                
                <p data-name="saldo">Tu saldo actual es: $100</p>

                <section>
                    <p data-name="movimiento">Estos son tus movimientos</p>
                    <hr>
                    
                    <article>
                        <section data-name="left">
                            <p class="movimientos">Suburbia</p>
                            <p class="movimientos">Samsung</p>
                            <p class="movimientos">Liverpool</p>
                            <p class="movimientos">Apple</p>
                            <p class="movimientos">Apple</p>
                            <p class="movimientos">Sony</p>
                            <p class="movimientos">Gameplanet</p>
                        </section>

                        <section data-name="right">
                            <p class="movimientos">-$100</p>
                            <p class="movimientos">-$2000</p>
                            <p class="movimientos">-$400</p>
                            <p class="movimientos">-$5000</p>
                            <p class="movimientos">-$13000</p>
                            <p class="movimientos">-$8000</p>
                            <p class="movimientos">-$300</p>
                        </section>
                    </article>
                    
                </section>
                <button id="backButton" @click="${this._cuenta534Out}">Volver</button>
        </main>  
        
        ` : html``}
        `
    };

    _cuenta534Out(){
        this.dispatchEvent(new CustomEvent('cuenta534Out'));
    }
}