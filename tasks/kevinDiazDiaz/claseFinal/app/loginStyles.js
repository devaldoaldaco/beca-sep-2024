import {css} from 'lit';
export const loginStyles = css`
    *{
        margin: 0;
        padding: 0;
    }

    article{
        display: flex;
        flex-direction: column;
        padding-bottom: 22.5rem;
        margin: 7rem auto;
        width: 90%; 
        max-width: 30rem; 
        min-width: 10rem;
    }

    [data-name="user_data"]{
        display: flex;
        flex-direction: row;
        align-items: center;
        color: white;
        font-family: Arial;

    }

    [data-name="boton"]{
        margin: 1rem 0 0 10rem;
    }

    .data{
        margin: 1rem 2rem 2rem 1rem;
    }

    h1{
        font-size: 5rem;
        text-align: center;
        color: white;
        padding: 3rem;
    }

    input{  
        height: 1.5rem;
        width: 100%;
    }

    main{
        min-width: 35rem;
        background-image: url('./login_background.jpg');
        background-size: cover; 
        background-position: center; 
        background-repeat: no-repeat; 
        z-index:0;
    }

    p{
        font-size: 1.5rem;
        font-family: Arial;
    }

    button{
        width: 6rem;
        height: 3rem;
        border-radius: 1rem;
        background-color: aliceblue;
        font-size: 1.5rem;
    }

`;
