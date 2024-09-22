import {css} from 'lit'

export const styleDashboard = css`
/* Estilos generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#title {
  color: #03529B;
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 20px;
}

/* Contenedor del dashboard */
.dashboard-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  background-color: #f0f8ff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(3, 82, 155, 0.1);
  max-width: 700px;
  margin: 40px auto;
}

/* Estilo de las secciones de cuenta y tarjeta */
.cuenta, .tarjeta {
  background-color: #FFFFFF;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(6, 149, 215, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cuenta:hover, .tarjeta:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(6, 149, 215, 0.2);
}

/* Estilos de los títulos */
h1, h2 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #03529B;
  margin-bottom: 15px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

/* Contenedor de la información de cuenta */
.info-cuenta {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  flex-wrap: wrap; 
  gap: 15px; 
}

/* Información de cuenta y saldo */
#cuenta {
  font-size: 1em;
  color: #50BBEB;
  flex: 1 1 100%; 
}

#saldo {
  font-size: 1.2em;
  font-weight: bold;
  color: #03529B;
  margin-top: 5px;
  flex: 1 1 auto; 
}

/* Estilo del botón cerrar sesión */
.volver-button {
  background-color: #FF6347; 
  color: #FFFFFF;
  border: none;
  padding: 12px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 99, 71, 0.4);
  align-self: flex-end; 
}

.volver-button:hover {
  background-color: #FF4500; 
  box-shadow: 0 6px 20px rgba(255, 69, 0, 0.5);
  transform: translateY(-3px);
}

/* Estilo del botón detalles */
#detalles-tarjeta {
  background-color: #007BFF;
  color: #FFFFFF; 
  border: none;
  padding: 10px 15px; 
  font-size: 1em;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.4); 
}

#detalles-tarjeta:hover {
  background-color: #0056b3; 
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.6); 
  transform: translateY(-3px); 
}

/* Estilo del contenedor de tarjeta */
.info-tarjeta {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 15px;
}

#nombre-usuario {
  color: #50BBEB;
  font-weight: bold;
}

#tarjeta {
  font-size: 1em;
  color: #50BBEB;
  flex: 1 1 100%;
}

/* Responsividad */
@media (max-width: 600px) {
  .dashboard-container {
    padding: 20px;
  }
  .info-cuenta, .info-tarjeta {
    flex-direction: column;
    align-items: flex-start;
  }
  .volver-button {
    align-self: center;
    width: 100%;
  }
}
`