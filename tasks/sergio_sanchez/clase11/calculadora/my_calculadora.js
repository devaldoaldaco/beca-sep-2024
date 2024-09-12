import CalculadoraServisios from './calculadoraServicios.js';

export class MyCalculadora extends HTMLElement {
    constructor(){
        super();
        this.total = 0;
        this.input1 = null;
        this.input2 = null;
        this.boton_suma = null;
        this.boton_resta = null;
        this.boton_mult = null;
        this.boton_div = null;
        this.boton_borrar = null;
        this.calculadora_servicios = CalculadoraServisios;
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>
            h1{
                 text-align: center;
            }
            .pantalla{
                text-align: center;
                display: flex;
                margin: 2%;
                font-size: 30px;
            }
            .left{
                width: 40%;
                float: left;
            }
            .center{
                width: 20%;
                background-color: black;
                float: left;
                color: white;
            }
            .right{
                width: 40%;
                float: right;
            }
            .inputs, .buttons{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .inputs > input{
                width: 20%;
                height: 30px;
                margin: 0 1% 2% 0;
            }
            .buttons > button{
                width: 50px;
                height: 50px;
                margin: 0 2% 0 2%;
            }
        </style>
            <section>
                <h1>Mi primera calculadora</h1>
            </section>
            <section class="pantalla">
                <div class="left"></div>
                <div class="center">
                    <span>${this.total}</span>
                </div>
                <div class="right"></div>
            </section>
            <section class="inputs">
                <input placeholder="Ingresa el primer valor"  id="valor1">
                <input placeholder="Ingresa el segundo valor"  id="valor2">
            </section>
            <section class="buttons">
                <button id="suma">+</button>
                <button id="resta">-</button>
                <button id="mult">*</button>
                <button id="div">/</button>
                <button id="borrar">Borrar</button>
            </section>
        `
        this.input1 = this.shadowRoot.getElementById("valor1")
        this.input2 = this.shadowRoot.getElementById("valor2")
        this.boton_suma = this.shadowRoot.getElementById("suma")
        this.boton_resta = this.shadowRoot.getElementById("resta")
        this.boton_mult = this.shadowRoot.getElementById("mult")
        this.boton_div = this.shadowRoot.getElementById("div")
        this.boton_borrar = this.shadowRoot.getElementById("borrar")

        this.boton_suma.addEventListener('click', () =>{
            this.total = this.calculadora_servicios.suma(new Number(this.input1.value), new Number(this.input2.value));
            this.render();
        })
        this.boton_resta.addEventListener('click', () =>{
            this.total = this.calculadora_servicios.resta(new Number(this.input1.value), new Number(this.input2.value));
            this.render();
        })
        this.boton_mult.addEventListener('click', () =>{
            this.total = this.calculadora_servicios.mult(new Number(this.input1.value), new Number(this.input2.value));
            this.render();
        })
        this.boton_div.addEventListener('click', () =>{
            this.total = this.calculadora_servicios.div(new Number(this.input1.value), new Number(this.input2.value));
            this.render();
        })
        this.boton_borrar.addEventListener('click', () =>{
            this.render();
        })
    }
}