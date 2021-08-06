const fs = require("fs");
const fsp = require("fs/promises");
const { EOL } = require("os");
const path = require("path");
const os = require("os");

setInterval(() => {
(async () => {
    const totalMem = (os.totalmem() / (1024 ** 2)).toFixed(2).toString();
    const freeMem =  (os.freemem() / (1024 ** 2)).toFixed(2).toString();
    const usage = ((freeMem * 100) / totalMem).toFixed(2)

    const compiler = `${EOL}{"total_memory":"${totalMem} MB", "free_memory":"${freeMem} MB", "usage":"${usage} %"}`
    try {
        await fsp.appendFile(path.resolve(__dirname, "log.txt"), compiler);
        console.log("Novo conteúdo adicionado (Promise)");
    } catch(err) {
        console.log(err.message);
    }
    
})()

}, 5000)
