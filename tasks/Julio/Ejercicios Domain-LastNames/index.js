
//Function to get the domain
function getDomain(urlfrominput){

    let domain;

    if(urlfrominput.search("www")>=0){
        let from= urlfrominput.search("www");
        let until= urlfrominput.search(/\.com|net/i);
        domain= urlfrominput.slice(from+4, until);
    }else{
        let from= urlfrominput.search("//");
        let until= urlfrominput.search(/\.com|net/i);
        domain= urlfrominput.slice(from+2, until);
    }

    let text= document.getElementsByTagName('h1');
    text[0].innerHTML=domain;
    
}

getDomain("http://www.zombie-bites.com");

//Function to get the last name of all the Michaels in text

function getLastName(stringfrominput){

    const regexp = /\Michael\s[A-Z][a-z]+/gm

    const array = [...stringfrominput.matchAll(regexp)];
    const lastnames=[];

    for(michael of array){
        michael=michael.toString();
        let from= michael.search(/\s[A-Z]/gm);
        let until= michael.search(/[a-z]$/gm);
        let lastName= michael.slice(from+1, until+1);
        lastnames.push(lastName);
    }

    let text= document.getElementsByTagName('h1');
    text[1].innerHTML=lastnames;
}

getLastName("Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?");