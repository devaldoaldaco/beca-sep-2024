import { LitElement, html, css } from "lit";
class LoginView extends LitElement {
  static properties = {
    username: { type: String },
    password: { type: String },
    loading: { type: Boolean }
  };

  constructor() {
    super();
    this.username = '';
    this.password = '';
    this.loading = false; 
  }

  static styles = css`
    .spinner {
      border: 4px solid rgba(0, 0, 0, 0.1);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border-left-color: #09f;
      animation: spin 1s ease infinite;
      margin: 0 auto; /* Centrar el spinner */
    }

    :host {
      display: block;
      height: 100vh; 
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }

    div {
      width: 300px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    input {
      width: calc(100% - 22px);
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    #errorMessage {
      color: red;
      font-size: 14px;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .hidden {
      display: none;
    }
  `;

  render() {
    return html`
      <div>
        ${this.loading 
          ? html`
           <h1>Espere, cargando datos...</h1>
          <div class="spinner"></div>` 
          : html`
            <h1>Login</h1>
            <input type="text" @input="${this.updateUsername}" placeholder="Usuario">
            <input type="password" @input="${this.updatePassword}" placeholder="Contrasena">
            <button @click="${this.handleLogin}" ?disabled="${this.loading}">Ingresar</button>
            <p id="errorMessage" style="color: red;"></p>
          `}
      </div>
    `;
  }

  updateUsername(e) {
    this.username = e.target.value;
  }

  updatePassword(e) {
    this.password = e.target.value;
  }

  handleLogin() {
    this.loading = true;
    const promiseLogin = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.username === "admin" && this.password === "1234") {
          resolve('login-success');
        } else {
          reject('Credenciales incorrectas');
        }
      }, 3000);
    });

    promiseLogin
      .then((message) => {
        this.dispatchEvent(new CustomEvent(message));
      })
      .catch((error) => {
        alert(error);
      })
  }
}

customElements.define('login-view', LoginView);
