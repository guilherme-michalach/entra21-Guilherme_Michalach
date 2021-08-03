// const circulo = require("./circulo")
const { area, circunferencia } = require("./circulo")
const Quadrado = require("./quadrado")

// console.log(circulo.area(6))
// console.log(circulo.circunferencia(10))
console.log(area(6))
console.log(circunferencia(10))
console.log(Quadrado)

const quadrado = new Quadrado(4)
console.log(quadrado.area())