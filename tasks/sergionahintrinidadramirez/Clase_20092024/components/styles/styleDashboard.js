import {css} from 'lit'

export const styleDashboard = css`
  .dashboard-container {
            display: flex;
            flex-direction: column;
            gap: 25px;
            padding: 30px;
            background-color: #f0f8ff;
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(3, 82, 155, 0.1);
            max-width: 600px;
            margin: 40px auto;
            }

            h1, h2 {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #03529B;
            margin: 0;
            }

            h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
            text-align: center;
            }

            h2 {
            font-size: 1.5em;
            margin-bottom: 15px;
            }
            #title{
            color: #F1F8FF;

            }
            .cuenta, .tarjeta {
            background-color: #FFFF;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(6, 149, 215, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .cuenta:hover, .tarjeta:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(6, 149, 215, 0.2);
            }

            .info-cuenta, .info-tarjeta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #0695D7;
            }

            #saldo {
            font-size: 1.2em;
            font-weight: bold;
            color: #03529B;
            }

            button {
            padding: 10px 15px;
            background-color: #0695D7;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1em;
            transition: background-color 0.3s ease, transform 0.1s ease;
            }

            button:hover {
            background-color: #03529B;
            transform: scale(1.05);
            }

            #nombre-usuario {
            color: #50BBEB;
            font-weight: bold;
            }

            #cuenta, #tarjeta {
            font-size: 0.9em;
            color: #50BBEB;
            }

            body {
            background-color: #e6f3ff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
          
`