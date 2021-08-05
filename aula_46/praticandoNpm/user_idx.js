const fsp = require("fs/promises");
const fs = require("fs");
const { EOL } = require("os");
const path = require("path");

fs.readFile(path.resolve( "./users.json"), "utf8", (err, jsonString) => {
    if (err) {
        return console.log(err.message);
    }
    
    const nomes = JSON.parse(jsonString);
    let pessoa = "Marcos";

    buscar(pessoa)

    function buscar(nome) {
        let buscador = nomes.find(pessoa => pessoa.nome === nome);

        if(buscador.nome == nome) {
            console.log(`Usuário encontrado:\nNome: ${buscador.nome}\nIdade: ${buscador.idade}\nE-mail: ${buscador.email}`)
        } else {
            console.log("Usuário não encontrado")
            // o else não funfa, conferir motivo
        }
    }
});