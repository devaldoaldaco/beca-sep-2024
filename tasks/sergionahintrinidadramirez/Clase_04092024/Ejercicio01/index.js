function getDomainName(){
    const url = document.getElementById("url").value;

    //Eliminar HTTPS, HTTP y www
    let domain = url.replace(/(https?:\/\/)?(www\.)?/,'')

    //Extraer el nombre por medio de un arreglo
    domain = domain.split('.')[0]; //["domain","".com"]
                                   //[    0,       1]    


    document.getElementById('domainName').innerText = domain;
    console.log(domain);
}