export class MyCalculator extends HTMLElement{
    constructor(){
        super();
        this.result=0;
        this.operando1=0;
        this.operando2=0;
        this.button1=null;
        this.button2=null;
        this.button3=null;
        this.button4=null;
        this.button5=null;
        this.button6=null;
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }
    

    render(){
        this.shadowRoot.innerHTML = `
        <style>

            *{  
                font family: font-family: Arial, Helvetica, sans-serif; 
            }
            section{
                background-color: #D2B4DE;
                width: 100%;
                height: 60vh;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content: space-around;
            }
            article{
                margin: 1rem 3rem;
            }
            article>button, input{
                padding: 1rem;
                font-size: 1rem;
            }
            button:hover{
                background-color: #F3EFC2;
            }
        </style>
        <section>
            <h1 id="encabezado">Result in here</h1>
            <article>
                <input type="text" id="input1" placeholder="Give a number">
                <input type="text" id="input2" placeholder="Give a number">
            </article>
            <article>
                <button id="suma">+</button>
                <button id="resta">-</button>
                <button id="multiplicacion">x</button>
                <button id="division">/</button>
                <button id="ce">CE</button>
                <button id="off">OFF</button>
            </article>
        </section>
        `;

        this.button1 = this.shadowRoot.getElementById("suma");
        this.button2 = this.shadowRoot.getElementById("resta");
        this.button3 = this.shadowRoot.getElementById("multiplicacion");
        this.button4 = this.shadowRoot.getElementById("division");
        this.button5 = this.shadowRoot.getElementById("ce");
        this.button6 = this.shadowRoot.getElementById("off");
        this.operando1= this.shadowRoot.getElementById("input1");
        this.operando2= this.shadowRoot.getElementById("input2");
        this.result=this.shadowRoot.getElementById("encabezado");


        //funciones
        this.button1.addEventListener('click', () =>{
            this.result.innerHTML=Number(this.operando1.value)+Number(this.operando2.value);
        });
        this.button2.addEventListener('click', () =>{
            this.result.innerHTML=Number(this.operando1.value)-Number(this.operando2.value);
        });
        this.button3.addEventListener('click', () =>{
            this.result.innerHTML=Number(this.operando1.value)*Number(this.operando2.value);
        });
        this.button4.addEventListener('click', () =>{
            this.result.innerHTML=Number(this.operando1.value)/Number(this.operando2.value);

        }); 
        this.button5.addEventListener('click', () =>{
            this.result.innerHTML=0;
            this.operando1.value='0';
            this.operando2.value='0';
        });
        this.button6.addEventListener('click', () =>{   
            this.render();
        });     
    }
}