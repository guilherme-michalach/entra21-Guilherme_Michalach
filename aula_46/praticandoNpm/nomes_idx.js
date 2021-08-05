const fsp = require("fs/promises");
const fs = require("fs");
const { EOL } = require("os");
const path = require("path");

fs.readFile(path.resolve(__dirname, "exercicioNomes.txt"), (err, data) => {
    if (err) {
        return console.log(err.message);
    }
    let nomes = data.toString("utf-8").split(EOL);
    console.log(nomes); 

    const nomesComA = nomes.filter(nome => nome[0].toUpperCase() === "A");
    
    console.log(nomesComA);
});

//fazer da forma que tava tentando antes, com startsWith, pra ver como que fica/ só não pode ser dentro de filter o startswith


