export class MyCardOne extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>
        h1{margin-left: 41%; color: #FEFFFA; font-size: 26px; margin-bottom:2%;}
        #mainDiv{background-color: #134289; width: 500px; height: 700px; margin-left: 30%; border-radius: 10%;}
        #cuentaAPesos{background-color: white; width: 380px; height: 130px; margin-left: 12%; border-radius: 5% }
        #sectionLeft{background-color: white; width: 190px; height: 130px;display: inline-block; border-radius: 5%}
        #sectionRight{background-color: white; width: 190px; height: 130px; float: right; border-radius: 5%}
        .title{color : grey; margin-left: 10%;}
        .codigo{color: #83A3D1; margin-left: 10%; }
        #cash{margin-left: 25%;}
        #saldoDisponible{margin-left :25%;color : grey;}
        #numbers{margin-left: 10%;}

        #Resume{background-color: white; width: 380px; height: 330px; margin-left: 12%; margin-top: 10%; border-radius: 5%}
        .titleTarjetas{color : grey; margin-left: 5%; padding-top: 5%;}
        .codigoTarjetas{color: #83A3D1; margin-left: 5%;}
        #contenedorMov1{display: grid ; grid-template-columns: 50% 50%;}
        #contenedorMov2{display: grid ; grid-template-columns: 50% 50%;}
        .numbers2{margin-left: 5%}
        .fecha{margin-left: 5%;}
        .right{text-align: right; place-content: center;}
        </style>
        
        <div id ="mainDiv">
        <h1>Hola Axel</h1>
        <div id = "cuentaAPesos">
        <section id ="sectionLeft">
        <p class = "title">Cuenta en pesos</p>
        <p class = "codigo">OOO1ah3825</p>
        <p id = "numbers">* 3825</p>
        </section>
        <section id= "sectionRight">
        <p id = "cash">$8,732,23</p>
        <p id = "saldoDisponible">Saldo disponible</p>
        </section>
        </div>
        <div id="Resume">
        <div id ="contenedorMov1">
        <div>
        <p class = "titleTarjetas">Ultimos Movimientos</p>
        <p class = "fecha">3 de diciembre</p>
        <p class = "codigoTarjetas">OOO1ah3825</p>
        <p class = "numbers2">* 3825</p>
        </div>
        <div class="right">
        <p>$5,852.22</p>
        </div>
        </div>
        <div id ="contenedorMov2">
        <div>
        <p class = "titleTarjetas">Ultimos Movimientos</p>
        <p class = "fecha">8 de diciembre</p>
        <p class = "codigoTarjetas">OOO1ah3825</p>
        <p class = "numbers2">* 3825</p>
        </div>
        <div class="right">
        <p>$2,591.00</p>
        </div>

        </div>
        </div>
        </div>
        `;
        
    }

}