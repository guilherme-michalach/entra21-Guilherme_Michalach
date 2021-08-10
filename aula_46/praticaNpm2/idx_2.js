const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

// (async () => {

//     try {
//         // const data = await fsp.readFile(path.resolve(__dirname, "alunos.json"));
//         await fs.readFile(path.resolve( "./alunos.json"), "utf8", (err, jsonString) => {
//             if (err) {
//                 return console.log(err.message);
//             }
            
//             const nomes = JSON.parse(jsonString);    
//             console.log(nomes); }
//         // await fsp.appendFile(path.resolve(__dirname, "aprovados.json"), compiler);
//         // console.log("Novo conteúdo adicionado (Promise)");
//     } catch(err) {
//         console.log(err.message);
//     }
    
// })()

(async () => {
    try {
        const data = (await fsp.readFile(path.resolve(__dirname, "alunos.json"))).toString();
        let dataAlunos = JSON.parse(data);

        if(dataAlunos.notas >= 6) {
        await fsp.appendFile(path.resolve(__dirname, "aprovados.json"), compiler);
        console.log("Novo conteúdo adicionado (Promise)");
        }
        console.log(dataAlunos)
    } catch (err) {
        console.log(err.message);
    }
})();
