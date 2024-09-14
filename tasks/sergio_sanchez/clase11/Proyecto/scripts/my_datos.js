export class MyDatos extends HTMLElement {
    constructor(){
        super();
        this.click_movimientos = null;
        this.my_movimientos = null;
        this.no_mostrar_tarjeta = null;
        this.no_mostrar_datos = null;
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
                h1 {
                    text-align:center;
                }
                .cuenta {
                    color: #77B82B;
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
                    text-align: right
                }

                .cuenta-tipo{
                    font-style: italic;
                    color: #9a9a9a;
                    font-weight:300;
                }
                .credit-sald{
                    color: #9a9a9a;
                }
                .tarjeta-contenedor{
                    background: radial-gradient(ellipse at center, rgb(167,207,223) 0%,rgb(35,83,138) 100%);
                    padding: 15px;
                    border-radius: 8px;
                    max-width: 450px;
                    margin: auto;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .chip{
                    display: flex;
                    gap: 10px;
                }
                .right{
                    text-align: right;
                    border: 0;
                    margin: 0;
                }
                .right img{
                    width: 60px;
                    height: 60px;
                }
                h3{
                    font-size: 35px;
                    font-weight: 500;
                    margin: 15px 0;
                    color: white;
                }
                #numero-cuenta{
                    font-size: 27px;
                    color: white;
                    margin: auto 0;
                    margin-bottom: 28px;
                    letter-spacing: 3px;
                }
                .img_tarjeta{
                    width: 100px;
                    height: 70px;
                }
                .img_celular{
                    width: 80px;
                    height: 45px;
                }
            </style>
            <div id="no-mostar-datos">
                <div class="contenedor-datos">
                    <h1>Hola Sergio</h1>
                    <!--section class="buttons">
                        <button> </button>
                    </section-->
                </div>
            </div>
            <div class="contenedor-datos">
                <p>CUENTAS EN PESOS</p>
                <div class="contenedor-tarjeta border">
                    <div>
                        <p class="cuenta"></p>
                        <p class="cuenta-tipo">9489hd4938</p>
                        <p class="credit-sald">*8392</p>
                    </div>
                    <div class="direction-right">
                        <p>$8,477.29</p>
                        <p class="credit-sald">Saldo disponible</p>
                    </div>
                </div>
            </div>
            <div id="no-mostrar-tarjeta">
                <div id="click-movimientos" class="contenedor-datos">
                    <p>TARJETAS</p>
                    <div class="contenedor-tarjeta border">
                        <div>
                            <p class="cuenta"></p>
                            <p class="cuenta-tipo">9489hd4938</p>
                            <img src="./img/tarjeta.jpg" class="img_tarjeta"></img>
                            <p class="credit-sald">*8392</p>
                        </div>
                        <div class="direction-right">
                        <p class="cuenta"></p>
                            <img src="./img/celular.png" class="img_celular"></img>
                            <p class="cuenta"></p>
                        </div>
                    </div>
                </div>
            </div>
        `
        this.no_mostrar_datos = this.shadowRoot.getElementById('no-mostar-datos');
        this.no_mostrar_tarjeta = this.shadowRoot.getElementById('no-mostrar-tarjeta');
        this.click_movimientos = this.shadowRoot.getElementById("click-movimientos")
        this.my_movimientos = document.getElementById('my_movimientos');

        this.click_movimientos.addEventListener('click', () =>{
            this.no_mostrar_datos.style.display = "none";
            this.no_mostrar_tarjeta.style.display = "none";
            this.my_movimientos.style.display = "block";
        })
    }
}