import {css} from 'lit'
export const styleDetails = css`
/* Contenedor principal */
.details-container {
  max-width: 800px;
  margin: 40px auto;
  font-family: 'Arial', sans-serif;
  color: #03529B;
  padding: 20px;
  background-color: rgb(230, 248, 255,0.9);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(3, 82, 155, 0.1);
}

/* Título principal */
#title {
  text-align: center;
  color: #03529B;
  margin-bottom: 30px;
  font-size: 2.5em;
}

/* Estilos generales de la tarjeta */
.card-details {
  width: 380px;
  height: 220px;
  background: linear-gradient(135deg, #0695D7, #03529B);
  border-radius: 15px;
  padding: 20px;
  color: #FFFFFF;
  box-shadow: 0 10px 20px rgba(3, 82, 155, 0.3);
  position: relative;
  overflow: hidden;
  margin: 0 auto 30px; /* Centrar la tarjeta y separación inferior */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Información principal de la tarjeta */
.card-details h2 {
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.card-details p {
  font-size: 16px;
  margin: 5px 0;
}

/* Número de tarjeta */
#det-tarjeta {
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace; /* Tipografía de tarjeta */
  letter-spacing: 3px;
  margin-top: 10px;
  display: block;
}

/* Detalles adicionales de la tarjeta */
.card-details span {
  font-weight: bold;
  color: #50BBEB;
}

/* Diseño del chip de la tarjeta */
.card-chip {
  width: 40px;
  height: 30px;
  background: linear-gradient(135deg, #e0e0e0, #b0b0b0);
  border-radius: 4px;
  position: absolute;
  top: 20px;
  left: 20px;
}

/* Logo de la tarjeta */
.card-logo {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  font-weight: bold;
}

/* Información adicional (titular y expiración) */
.card-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.card-info div {
  display: flex;
  flex-direction: column;
}

.card-info .label {
  font-size: 10px;
  text-transform: uppercase;
  opacity: 0.7;
}

.card-info .value {
  font-size: 14px;
  font-weight: bold;
}

/* Decoración de la tarjeta */
.card-details::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.card-details::after {
  content: '';
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
}

/* Ajustes de responsividad */
@media (max-width: 600px) {
  .card-details {
    height: auto;
    padding: 15px;
  }
  #det-tarjeta {
    font-size: 18px;
  }
  .card-info .value {
    font-size: 12px;
  }
}

/* Contenedor de movimientos */
.movements-container {
  background-color: #FFFFFF;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px; 
}

.movements-container h2 {
  color: #03529B;
  margin-bottom: 20px;
  font-size: 22px;
}

.movimientos-lista {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Estilo de cada movimiento */
.movimiento-item {
  background-color: #f0f8ff;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(6, 149, 215, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.movimiento-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(6, 149, 215, 0.2);
}

.movimiento-info {
  display: flex;
  flex-direction: column;
  gap: 5px; 
}

.tipo-movimiento {
  font-weight: bold;
  color: #03529B;
}

.tipo-pago {
  font-size: 0.9em;
  color: #666;
}

.importe {
  font-weight: bold;
  color: #0695D7;
  font-size: 1.2em;
}

/* Botón de volver al dashboard */
.volver-button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 12px 20px;
  text-align: center;
  font-size: 1em;
  cursor: pointer;
  border-radius: 25px; 
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3); 
  display: block; 
  margin: 20px auto; 
}

.volver-button:hover {
  background-color: #0056b3;
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4); 
  transform: translateY(-3px); 
}

/* Responsividad */
@media (max-width: 600px) {
  .details-container {
    padding: 15px;
  }

  .card-details, .movements-container {
    padding: 20px;
  }

  .card-details h2, .movements-container h2 {
    font-size: 20px;
  }

  .card-details p {
    font-size: 16px;
  }
}
`