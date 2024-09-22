import {css} from 'lit'

export const toDoListStyles = css`
    *{
        margin: 0;
        padding: 0;
    }

    main{
        background-color: lightblue;
        margin: 8rem;
        border-radius: 1rem; 
        min-height:20rem;
        min-width:25rem;
    }

    #addButton{
        background-color: lemonchiffon;
        padding: 1rem; 
        border-radius: 1rem;        
    }

    #inputSection{
        display: flex;
        justify-content: center;
        margin: 1em; 
    }

    #taskInput{
        border-radius: 1rem;
        text-align:center;
    }

    .task {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 2rem;
        padding-bottom: 1rem;
    }

    .text{
        margin:0.5rem;
        font-family: Arial;
        font-size: 1rem;

        flex-grow: 1;
        word-wrap: break-word; 
        overflow: hidden; 
    }

    .task button {
        background-color: lemonchiffon;
        border-radius: 0.3rem; 
        padding:0.5rem 1rem;
        margin-left:0.5rem;
    }

    .buttonSection{
        margin-left:auto;
        display:flex;
    }

    h1{
        text-align: center;
        padding: 4rem; 
        font-family: Arial;
        font-size: 2rem; 
    }

`
