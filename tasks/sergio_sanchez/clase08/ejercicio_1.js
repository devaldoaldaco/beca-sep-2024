let url = "http://www.zombie-bites.com" ;
// let url = "http://github.com/carbonfive/raygun"
// let url = "https://www.cnet.com"

const hostname = new URL(url).hostname.replace(/^www\./, '');
hostname.split('.')[0];


console.log(hostname)