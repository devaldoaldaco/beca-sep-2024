const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";
const lastNames = inputText.split('Michael ');
let pattern = /[\^*@!"#$%&/()=?¡!¿'\\]/gi;

const names = lastNames
  .filter(lastNames => /^[A-Z][a-z]+/.test(lastNames))
  .map(lastNames => lastNames.split(' ')[0])

const name = names
  .map(names => names.replace(pattern, ''))


console.log(name.splice(1));