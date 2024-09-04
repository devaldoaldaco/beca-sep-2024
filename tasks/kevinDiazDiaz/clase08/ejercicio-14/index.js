function getDomain(url){
    const domain= url.replace(/https?:\/\/(www\.)?/, '');
    return domain.split('.')[0];
}

function extractDomain(){
    const  url = document.getElementById('urlInput').value;
    const dominio=getDomain(url);
    document.getElementById('result').textContent=dominio;
}