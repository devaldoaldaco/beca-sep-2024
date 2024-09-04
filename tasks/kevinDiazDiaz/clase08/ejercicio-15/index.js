function getLastNames(text){
    const regular_expresion= /Michael\s([A-Z][a-z]+)/g;
    let matches;
    const lastNames=[];

    while((matches= regular_expresion.exec(text))!==null){
        lastNames.push(matches[1]);
    }

    return lastNames;
}

function extractLastNames(){
    const text=document.getElementById('textInput').value;
    const apellidos=getLastNames(text);
    document.getElementById('result').textContent=apellidos.join(', ');
}
