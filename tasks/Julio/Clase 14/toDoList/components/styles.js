import { css } from "lit";

export const GeneralStyles = css`

    :host{
        width: auto;
        border: 1px solid #ABB2B9;
        border-radius: 5px;
        padding: 1.5rem;
        background-color: #F4F6F7;
    }

    section{
        margin-top: 1rem;
    }

    tr:nth-child(even) {
        background-color: #5CA4EA;
    }

    .realTask{
        padding: 0.5rem;
        text-align:center;
    }

    td{
        text-align:center;
    }

    input, button{
        padding: 0.5rem;
        border-radius: 5px;
    }

    h3{
        margin-bottom: 2rem;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: 1.5px solid #91C9FF;
        outline: none;
        transition: 1s ease-in-out;
    }

    .btn:hover {
        transition: 1s ease-in-out;
        background: #4F95DA;
    }

    .btn:hover svg {
        stroke-dashoffset: -480;
    }

    .btn span {
        color: white;
        font-size: 18px;
        font-weight: 100;
    }


`;