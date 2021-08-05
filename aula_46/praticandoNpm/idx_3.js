const fsp = require("fs/promises");
const fs = require("fs");
const { EOL } = require("os");
const path = require("path");
const chalk = require('chalk');


fs.readFile(path.resolve(__dirname, "exercicioNomes.txt"), (err, data) => {
    if (err) {
        return console.log(err.message);
    }
    let nomes = data.toString("utf-8").split(EOL);
    console.log(nomes); 

    const nomesComA = nomes.filter(nome => nome[0].toUpperCase() === "A");
    const nomesComC = nomes.filter(nome => nome[0].toUpperCase() === "C");
    const nomesComD = nomes.filter(nome => nome[0].toUpperCase() === "D");

    console.log(chalk.red(nomesComA));
    console.log(chalk.blue(nomesComC));
    console.log(chalk.magenta(nomesComD));
});