import {css} from 'lit';

export const styleLogin = css`
.form-login {
    background-color: #FFFF;
    border-radius: 15px;
    padding: 30px 25px;
    box-shadow: 0 4px 20px rgba(3, 82, 155, 0.1);
    max-width: 500px;
    width: 100%;
    margin: 100px auto;
}

.form-login h5 {
    color: #03529B;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

.input-container {
    margin-bottom: 20px;
}

.form-login .controls {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #E0E0E0;
    border-radius: 6px;
    font-size: 16px;
    color: #333;
    transition: border-color 0.3s, box-shadow 0.3s;
    box-sizing: border-box;
}

.form-login .controls:focus {
    outline: none;
    border-color: #0695D7;
    box-shadow: 0 0 0 2px rgba(6, 149, 215, 0.2);
}

.form-login .controls::placeholder {
    color: #999;
}

.form-login .buttons {
    width: 100%;
    padding: 10px;
    background-color: #0695D7;
    color: #FFFF;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
}

.form-login .buttons:hover {
    background-color: #03529B;
}

.input-container {
    position: relative;
}

.input-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #999;
    font-size: 16px;
}

.form-login .controls.with-icon {
    padding-left: 35px;
}
`