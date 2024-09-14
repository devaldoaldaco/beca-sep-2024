export class Mylogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            box-sizing: border-box;
        }

        :focus {
            outline: none;
        }
        form {
            margin: auto;
            width: 50%;
            max-width: 500px;
            background: #bebebe;
            padding: 20px;
            border: 1px solid rgba(0, 0, 0, 0.2);
        }

        h2 {
            text-align: center;
            margin-bottom: 10px;
            color: rgb(255, 255, 255);
            font-family: Arial Black;
        }

        input {
            display: block;
            padding: 10px;
            width: 100%;
            margin: 30px 0;
            font-size: 20px;
        }

        button {
            display: block;
            padding: 10px;
            width: 100%;
            margin: 30px 0;
            font-size: 20px;
            background: linear-gradient(#0059ff, #4441fd);
            border: 0;
            color: rgb(255, 255, 255);
            opacity: 0.8;
            cursor: pointer;
            font-family: Arial;
            border-radius: 20px;
            margin-bottom: 0;
        }

        button:hover {
            opacity: 1;
        }

        button:active {
            transform: scale(0.95);
        }
        </style>
        <form id="form">
            <h2>Iniciar sesión</h2>
            <input id="user" type="text" placeholder="&#128273; Usuario" name="usuario" required>
            <input id="password" type="password" placeholder="&#128274; Contraseña" name="pass" required>
            <button id="submit" type="submit" name="btningresar">Ingresar</button>
        </form>
        `;

        // Agregar el evento al botón de submit
        const submit = this.shadowRoot.getElementById("submit");
        const form = this.shadowRoot.getElementById("form");

        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Evita que el formulario se envíe
            this.verificar();
        });
    }

    verificar() {
        const user = this.shadowRoot.getElementById("user").value;
        const pass = this.shadowRoot.getElementById("password").value;

        if (user === "miguel" && pass === "miguel") {
            console.log("Ingreso correcto");
            const dashboard = document.querySelector('my-dashboard');
            const login=this.shadowRoot.getElementById("form")
            const container= dashboard.shadowRoot.getElementById("container-miguel-dashboard");
            const header = dashboard.shadowRoot.getElementById("header-miguel-dashboard");
            login.style.display = 'none';
            header.style.display = 'block';
            container.style.display = 'block';
        }
    }
}
