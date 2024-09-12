export class Cuenta999 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="cuentaStyles.css">
        <main>
            <h1>Cuenta de terminación .999</h1>
            
            <p data-name="saldo">Tu saldo actual es: $2400</p>

            <section>
                <p data-name="movimiento">Estos son tus movimientos</p>
                <hr>
                
                <article>
                    <section data-name="left">
                        <p class="movimientos">Sanborns</p>
                        <p class="movimientos">Vips</p>
                        <p class="movimientos">LG</p>
                        <p class="movimientos">Sears</p>
                        <p class="movimientos">C&A</p>
                        <p class="movimientos">Sony</p>
                        <p class="movimientos">Gameplanet</p>
                    </section>

                    <section data-name="right">
                        <p class="movimientos">-$300</p>
                        <p class="movimientos">-$200</p>
                        <p class="movimientos">-$500</p>
                        <p class="movimientos">-$8000</p>
                        <p class="movimientos">-$13000</p>
                        <p class="movimientos">-$8000</p>
                        <p class="movimientos">-$300</p>
                    </section>
                </article>
                
            </section>
            <button id="backButton">Volver</button>
        </main>
        `
    }

    addEventListeners() {
        this.shadowRoot.getElementById('backButton').addEventListener('click', () => {
            this.goBack();
        });
    }

    goBack() {
        const cuenta999Page = document.querySelector('cuenta999-page');
        const dashboardPage = document.querySelector('dashboard-page');

        cuenta999Page.classList.add('hidden');
        dashboardPage.classList.remove('hidden'); 
    }
}