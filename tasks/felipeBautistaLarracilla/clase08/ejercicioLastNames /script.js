const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";
const expresion = /\bMichael\s+([A-Z][a-z]+)\b/g;
let names = '';
const lastNames = [];


while ((names = expresion.exec(inputText)) != null) {
    //console.log(`Nombre completo: ${names[0]}, Apellido:${names[1]}`);
    lastNames.push(names[1]);
}
console.log(lastNames);