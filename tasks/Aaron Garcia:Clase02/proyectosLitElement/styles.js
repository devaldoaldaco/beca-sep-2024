import {css} from "lit";

export {Styles} = css`
*{
    margin:0px;
    padding:0px;
}

#logginHeader{
    color: white;
     display:flex;
    flex-direction: column;
     flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    width:320px;
    height:580px;
    background-color: rgb(28, 115, 196);
    justify-content: center;
    }

#inicioSesion{
    border: none;
    background-color: rgb(171, 213, 227);
    width: 8rem;
    height: 2rem;
    border-radius: 5rem;
}

#email,#password{
    padding: 0.1rem 0.3rem 0.1rem 0.5rem;
    height: 2rem;
    border:none;
    border-radius: 5rem;
}

`;