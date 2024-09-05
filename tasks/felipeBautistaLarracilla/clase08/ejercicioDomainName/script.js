const url1 = "http://github.com/carbonfive/raygun"
const url2 = "http://www.cnet.com"
const url3 = "http://www.zombie-bites.com"
const url4 = "hola yo no soy una pagina.com"
const url5 = "http://github.com"
const url6 = "http://www.hola.mx"


function searchDomain(url){
  const urlPattern = /https?:\/\/(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?/;
  let validateUrl = urlPattern.test(url);
  if(validateUrl){
    let domain = url.match(/https?:\/\/(?:www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})/);
    //console.log(domain);
    domain = domain[1].split('.')[0];
    console.log(domain);
  }else{
    console.log("La url no es valida");
  }
}
searchDomain(url6);






