class Distanciation {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const socialDistancing = new Distanciation(5);

console.log(socialDistancing);

// socialDistancing.getArea(); // 78.53
// socialDistancing.getPerimeter(); // 31.41

console.log(socialDistancing.getArea(5));
console.log(socialDistancing.getPerimeter(5));
