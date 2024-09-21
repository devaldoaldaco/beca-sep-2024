import {css} from 'lit'
export const styleDetails = css`
.details-container {
            max-width: 800px;
            margin: 40px auto;
            font-family: 'Arial', sans-serif;
            color: #03529B;
            }
            
            h1 {
            text-align: center;
            color: #03529B;
            margin-bottom: 30px;
            }
            
            .card-details {
            background: linear-gradient(135deg, #0695D7, #03529B);
            border-radius: 15px;
            padding: 30px;
            color: #FFFF;
            box-shadow: 0 10px 20px rgba(3, 82, 155, 0.2);
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
            }
            
            .card-details::before {
            content: '';
            position: absolute;
            top: -50px;
            right: -50px;
            width: 100px;
            height: 100px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            }
            
            .card-details h2 {
            font-size: 24px;
            margin-bottom: 20px;
            text-transform: uppercase;
            }
            
            .card-details p {
            font-size: 18px;
            margin-bottom: 15px;
            }
            
            .card-details span {
            font-weight: bold;
            color: #50BBEB;
            }
            
            .movements-container {
            background-color: #FFFF;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            .movements-container h2 {
            color: #03529B;
            margin-bottom: 20px;
            font-size: 22px;
            }
            
            .movimientos-lista {
            list-style: none;
            padding: 0;
            }
            
            .movimiento-item {
            background-color: #f0f8ff;
            margin-bottom: 15px;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(6, 149, 215, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            .movimiento-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 8px rgba(6, 149, 215, 0.2);
            }
            
            @media (max-width: 600px) {
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
            #title{
            color: #F1F8FF;
            
            }
            .movimiento-item {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 12px;
            border-bottom: 1px solid #e0e0e0;
            }
            
            .movimiento-info {
            display: flex;
            flex-direction: column;
            }
            
            .tipo-movimiento {
            font-weight: bold;
            color: #03529B;
            margin-bottom: 4px;
            }
            
            .tipo-pago {
            font-size: 0.9em;
            color: #666;
            }
            
            .importe {
            font-weight: bold;
            color: #0695D7;
            }
`