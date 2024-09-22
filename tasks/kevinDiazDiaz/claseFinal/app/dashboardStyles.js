import {css} from 'lit';

export const dashboardStyles = css`
    *{
        margin: 0;
        padding: 0;
    }

    h1, p{
        text-align: center;
        margin: 0 5rem 5rem 5rem;
        padding: 2rem;
        font-family: Arial;
        font-size: 3rem;
        color: white;
    }

    p{
        font-size: 2rem;
    }

    main{
        min-width: 50rem;
        height: 51rem;
        background-image: url('dashboard_background.jpg');
        background-size: cover; 
        background-position: center; 
        background-repeat: no-repeat; 
    }

    section{
        background-color: cadetblue;
        width: 60%;
        margin: 5rem auto;
        max-width: 50rem;
        height: 12%;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button{
        margin: 1rem auto;
        padding: 1.5rem;
        font-size: 2rem;
        color: white;
        font-family: Arial;
        background-color: transparent;
        border: transparent;
    }

    #returnButton{
        position: absolute;
        top: 80px;   
        right: 1rem;
    }
`;