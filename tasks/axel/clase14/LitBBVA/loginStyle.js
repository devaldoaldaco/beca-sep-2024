import{css} from 'lit'

export const loginStyle = css`
    img{width:20em;height:7em; margin-left : 6em;}

    input{margin-left: 4%;background-color: #134289; border-top: none; border-left: none; border-right: none; width: 450px; color: #FEFFFA;}

    input::placeholder{color: #ABBEE0;}

    #hi{margin-left: 44%; color: #FEFFFA; font-size: 46px; margin-bottom:2%;}

    #name{margin-left: 47%; margin-top:0%;color: #FEFFFA; font-size: 30px;}
        
    a{margin-left: 40%; color: #FEFFFA;}

    button{display: block; margin-left: 33%; width: 200px; height: 50px; background-color: #2075A6; border:none; color:#FEFFFA;}

    #mainDivLog{background-color: #134289; width: 500px; height: 700px; margin-left: 30%; border-radius: 10%;}

    #token{background-color: #072358;width: 250px;height: 150px;position: relative; top: 160px;border-bottom-left-radius: 10%; display:  }

    #qr{background-color: #0D3470;width: 250px;height: 150px;position: relative; top: -6px; left: 250px;border-bottom-right-radius: 10%;}

    #fP1{padding-left: 35%; padding-top: 25%;color: #FEFFFA;}
    #fP2{padding-left: 15%; padding-top: 25%;color: #FEFFFA;}

    .loader {
    margin-left: 15em;
    margin-top: 3em;
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: none;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 

    



`
