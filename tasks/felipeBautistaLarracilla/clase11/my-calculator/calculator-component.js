export class MyCalculator extends HTMLElement{
  constructor(){
    super()
    this.result = 0;
    this.valor1 = 0;
    this.valor2 = 0;
    this.suma = null;
    this.resta = null;
    this.multiplicacion = null;
    this.division = null;
    this.reset = null;
    this.numero1 = 0;
    this.numero2 = 0;
    this.attachShadow({mode:'open'});
  }
  connectedCallback(){
    this.render();
   }

  render(){
    this.shadowRoot.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style-calculator.css">
    <section>
    <h1>Calculator</h1>
    <span> ${this.result} </span>
    <input id = "numero1" type="number" placeholder = "Ingresa tu primer numero "></input>
    <input id = "numero2" type="number" placeholder = "Ingresa tu segundo numero"></input>
    <button id = "suma" class = "btn btn-primary"> Suma</button>
    <button id = "resta" class = "btn btn-primary">Resta</button>
    <button id = "multiplicacion" class = "btn btn-primary">Multiplicacion</button>
    <button id = "division" class = "btn btn-primary">Division</button>
    <button id = "reset" class = "btn btn-primary">Reset</button>
    <br>
    </section>

    `
    ;

    this.suma = this.shadowRoot.getElementById("suma");
    this.resta = this.shadowRoot.getElementById("resta");
    this.multiplicacion = this.shadowRoot.getElementById("multiplicacion");
    this.division = this.shadowRoot.getElementById("division");
    this.reset = this.shadowRoot.getElementById("reset");
    this.numero1 = this.shadowRoot.getElementById("numero1");
    this.numero2 = this.shadowRoot.getElementById("numero2");


    //funciones

    this.suma.addEventListener('click', () => {
      this.result = this.valor1 + this.valor2;
      this.resetValues();
      this.render();
    });

    this.resta.addEventListener('click', () => {
      this.result = this.valor1 - this.valor2;
      this.resetValues();
      this.render();
    });

    this.multiplicacion.addEventListener('click', () => {
      this.result = this.valor1 * this.valor2;
      this.resetValues();
      this.render();
    });

    this.division.addEventListener('click', () => {
      this.result = this.valor1 / this.valor2;
      this.resetValues();
      this.render();

    });

    this.reset.addEventListener('click', () => {
      this.result = 0;
      this.render();
    })

    this.resetValues = () => {
      this.valor1 = 0;
      this.valor2 = 0;
    }

    this.numero1.addEventListener('input', (ev) =>{
      this.valor1 = Number(ev.currentTarget.value);
    });

    this.numero2.addEventListener('input',(ev) =>{
      this.valor2 = Number(ev.currentTarget.value);      
    });
  }
}
