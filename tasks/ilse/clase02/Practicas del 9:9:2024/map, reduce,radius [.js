const circles = [
  { radius: 5, color: 'red'},
  {radius: 3, color: 'blue'},
  {radius: 7, color: 'red'},

];

function Circle(radius) {
  this.radius = radius;
  this.area = () => Math.PI * Math.pow(this.radius, 2);

}

const totalRedArea =  circles
.filter(circle => circle.color === 'red')
.map(circle => new Circle(circle.radius))
.map(circle => circle.area())
.reduce((total, area) => total + area, 0);
console.log(totalRedArea);
