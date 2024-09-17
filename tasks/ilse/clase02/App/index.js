const usuarios = [
    { usuario: 'admin', contrasena: '123' }
];

let usuarioLogeado = null;
let estadoCuenta = { saldo: 1000 };

function iniciarSesion() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuario && usuarios[i].contrasena === contrasena) {
            usuarioLogeado = usuarios[i];
            mostrarEstadoCuenta();
            return;
        }
    }
    alert('Usuario o contraseña incorrectos');
}

function mostrarEstadoCuenta() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('estadoCuenta').style.display = 'block';
    document.getElementById('saldo').textContent = estadoCuenta.saldo;
}

function retirar() {
    const monto = document.getElementById('retiro').value;
    if (monto <= estadoCuenta.saldo) {
        estadoCuenta.saldo -= monto;
        document.getElementById('saldo').textContent = estadoCuenta.saldo;
    } else {
        alert('Saldo insuficiente');
    }
}