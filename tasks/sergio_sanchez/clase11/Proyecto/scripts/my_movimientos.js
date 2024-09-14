export class MyMovimientos extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>
                .contenedor-datos{
                    margin: 15px 60px;
                    border: 2px solid rgba(255, 255, 255, 0.5);
                    padding: 15px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    border-radius: 5px;
                    background-color:white;
                }
                p {
                    font-size: 20px;
                }
                .cuenta {
                    color: black;
                    font-weight: 600;
                    font-size: 20px;
                }
                .contenedor-tarjeta{
                    display:grid;
                    grid-template-columns: 50% 50%;
                }
                .border{
                    border-bottom: 1px solid rgb(197 195 195 / 50%);
                }
                .direction-right{
                    text-align: right;
                    place-content: center;
                }
                .cuenta-tipo{
                    font-style: italic;
                    color: blue;
                    font-weight:300;
                }
                .right{
                    text-align: right;
                    border: 0;
                    margin: 0;
                }
            </style>
            <div class="contenedor-datos">
                <p>Ultimos Movimientos</p>
                <div class="contenedor-tarjeta border">
                    <div>
                        <p class="cuenta">1 de enero</p>
                        <p class="cuenta-tipo">9489hd4938</p>
                        <p class="credit-sald">*8392</p>
                    </div>
                    <div class="direction-right">
                        <p>$8,477.29</p>
                    </div>
                </div>
                <div class="contenedor-tarjeta border">
                    <div>
                        <p class="cuenta">1 de enero</p>
                        <p class="cuenta-tipo">9489hd4938</p>
                        <p class="credit-sald">*8392</p>
                    </div>
                    <div class="direction-right">
                        <p>$597.3</p>
                    </div>
                </div>
                <div class="contenedor-tarjeta border">
                    <div>
                        <p class="cuenta">1 de enero</p>
                        <p class="cuenta-tipo">9489hd4938</p>
                        <p class="credit-sald">*8392</p>
                    </div>
                    <div class="direction-right">
                        <p>$10,577.29</p>
                    </div>
                </div>
            </div>

        `
        
    }
}