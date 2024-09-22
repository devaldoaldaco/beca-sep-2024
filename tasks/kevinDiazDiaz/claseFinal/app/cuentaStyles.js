import {css} from 'lit';

export const cuentaStyles = css`
    *{
        margin: 0;
        padding: 0;
    }

    main{
        min-width: 40rem;
        height: 51rem;
        background-image: url('cuenta_background.jpg');
        background-size: cover; 
        background-position: center; 
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column; 
        align-items: center;
    }

    h1, [data-name="saldo"]{
        text-align: center;
        margin: 0 5rem 1rem 5rem;
        padding: 1.5rem;
        font-family: Arial;
        font-size: 3rem;
        color: white;
    }

    [data-name="saldo"]{
        font-size: 2rem;
        border-radius: 2rem;
        margin: 1rem auto;
        background-color:deepskyblue;
    }

    section{
        background-color: white;
        margin: 5rem auto;
        width: 90%;
        max-width: 90%;
        border-radius: 1rem;
        height: 80%;
    }

    [data-name="movimiento"], .movimientos, span{
        font-size: 1rem;
        font-family: Arial;
        text-align: center;
        padding: 1rem;
    }

    .movimientos{
        text-align: center;
        width: 100%;
    }

    span{
        float: right;
        text-align: right;
    }

    article{
        display: flex;
    }

    [data-name="left"]{
        margin: 0 0 0 6rem;
    }

    [data-name="right"]{
        margin: 0 6rem 0 0;
    }

    button{
        position: absolute;
        top: 10px;   
        right: 10px;
        margin: 1rem auto;
        padding: 1.5rem;
        font-size: 2rem;
        color: white;
        font-family: Arial;
        background-color: transparent;
        border: transparent;
        
    }

    #backButton{
        position: absolute;
        top: 80px;   
        right: 1rem;
    }

`