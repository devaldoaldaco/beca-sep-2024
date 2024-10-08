import { css } from "lit";

export const styleMain = css`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
bbva-login,
bbva-dashboard,
bbva-details {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(3, 82, 155, 0.3);
  max-width: 90%;
  width: 400px;
  margin: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

bbva-login:hover,
bbva-dashboard:hover,
bbva-details:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(3, 82, 155, 0.4);
}

h1, h2, h3 {
  color: #FFFF;
  margin-bottom: 20px;
  text-align: center;
}

input, button {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
}

input {
  background-color: rgba(255, 255, 255, 0.2);
  color: #FFFF;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

button {
  background-color: #0695D7;
  color: #FFFF;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #03529B;
}

@media (max-width: 600px) {
  bbva-login,
  bbva-dashboard,
  bbva-details {
      width: 95%;
      padding: 20px;
  }
}
`