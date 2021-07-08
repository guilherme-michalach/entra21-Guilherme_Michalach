// 1)
// Só com o console já é possível também
// Acessa a div e seu conteúdo

// let a = document.body.childNodes[1]
// console.log(a)

// console.log(document.body.children[0])

// 2)
// Acessa a ul e seu conteúdo

// let b = document.body.childNodes[3]
// console.log(b)

// console.log(document.body.children[1])

// 3)
// Acessa as li's e seu conteúdo

// let c = document.body.childNodes[3].children
// console.log(c)

// console.log(document.querySelectorAll("li"))

// console.log(document.body.childNodes[3].children)

// 4)

// let d = document.querySelector("#age-table")
// console.log(d)

// let e = document.getElementById("age-table")
// console.log(de)

// 5)

// let f = document.querySelectorAll("label")
// console.log(f)
// Método com erro, pois puxa a label de cima também

// let getLabel = document.getElementById("age-list")
// let gettingLabel = getLabel.children
// console.log(gettingLabel)

// // 6)

// let g = document.querySelector("tr > td:first-child")
// console.log(g)

// 7)

// let h = document.getElementsByName("search")
// let i = h[0]
// console.log(i)

// 8)

// i = h[1]
// console.log(i)

// // Funciona em conjunto com a 7

// 9)

// let j = document.querySelector("form > input:last-child")
// console.log(j)

// 10)

// Gravar essa parte do includes, startsWith, endsWith, etc

// let k = document.querySelectorAll("ul a")
// for(let link of k) {
    
//     let href = link.getAttribute("href")

//     if(href.includes("://") && !href.startsWith("http://internal.com") {
//         link.style.color = 'orange'
//     }
//ver se funfa
//     if(href.startsWith("http://internal.com")) {
//         link.style.color = ""
//     }

// }

// 11)

// let elemRemoval = document.querySelector("#elem")
//     elemRemoval.remove()

// console.log(elemRemoval)

// 12)

// let elemAdd = document.querySelector("ul > li:first-child")
//     elemAdd.insertAdjacentHTML("afterend" ,"<li>Item 2</li><li>Item 3</li>")

// 13)

// Pesquisar mais sobre depois

// let lista = document.querySelectorAll("li")

// for(let li of lista) {

//     let after = li.querySelectorAll("li").length

//     if(after) {
//         li.firstChild.data += ` [${after}]`
//     }

// }

// 14)

// let addDiv = document.createElement("div")
//     addDiv.className = "notificacao"
//     // addDiv.textContent = "Olá"

//     document.body.append(addDiv)

//     let estilo = document.querySelector("div")

//     estilo.innerHTML = "Olá"
//     estilo.style.color = 'blue'
//     estilo.style.position = "relative"
//     estilo.style.top = 10 + "px"
//     estilo.style.right = 10 + "px"

// 15)

// "use strict"

// let campo = document.querySelector(".campo")
// let bola = document.querySelector(".bola")

//     bola.style.left = Math.round(campo.clientWidth / 2 - bola.offsetWidth / 2)
//     bola.style.top = Math.round(campo.clientHeight / 2 - bola.offsetHeight / 2)

// 16)

// div = document.querySelector("#div-legenda")

// console.log(div.getBoundingClientRect())

// function mostraLegenda(elemento, html = "Teste") {
//     let p1 = document.createElement("div")
//         p1.style.textContent = html
//         p1.style.cssText = "position: absolute; color: green;"

//         let coordenadas = coords(elemento)

//         p1.style.left = coordenadas.left + "px"
//         p1.style.top = coordenadas.bottom + "px"

//         p1.innerHTML = html
//         // pra adicionar o texto só quando puxar a função realmente

//         return p1
// }

// function coords (elemento) {
//     let coordenadas = elemento.getBoundingClientRect()
//     // o getBounding sempre retorna o tamanho de um elemento e a posição relativa dele ao viewport / pesquisar mais sobre depois

//     return {
//         top: coordenadas.top + window.pageYOffset,
//         right: coordenadas.right + window.pageXOffset,
//         bottom: coordenadas.bottom + window.pageYOffset,
//         left: coordenadas.left + window.pageXOffset
//     }
// }

//     let p1 = mostraLegenda(div, "Abaixo da div")
//     document.body.append(p1)

// 17)

// let mago = document.querySelector("#esconder")

// mago.addEventListener("click", shazam)

// let count = 1

// function shazam() {
//     let selector = document.querySelector("#text")
//         selector.style.display = "none"

//         count = count + 1

//     if (count % 2 != 0) {
//         selector.style.display = "block"
//     }
// }

// Ou

// let mago = document.querySelector("#esconder")

// mago.addEventListener("click", shazam)

// function shazam() {
//     let selector = document.querySelector("#text")

//     if (selector.style.visibility === "hidden") {
//         selector.style.visibility = "visible";
//       } else {
//         selector.style.visibility = "hidden";
//       }

// }

// 18)

let campo = document.querySelector(".campo"),
    bola = document.querySelector(".bola")

campo.addEventListener("click", (event) => {
    // ver melhor pra entender 100%
    let coordCampo = event.currentTarget.getBoundingClientRect()

    // obter coordenadas
    let coordBola = {
        top: event.clientY - coordCampo.top - campo.clientTop - bola.clientHeight / 2,
        left: event.clientX - coordCampo.left - campo.clientLeft - bola.clientWidth / 2
    }

    // prevenção borda superior
    if(coordBola.top < 0) coordBola.top = 0

    // prevenção borda esquerda
    if(coordBola.left < 0) coordBola.left = 0

    // prevenção borda direita
    if(coordBola.left + bola.clientWidth > campo.clientWidth) {
        coordBola.left = campo.clientWidth - bola.clientWidth
    }

    // prevenção borda inferior
    if (coordBola.top + bola.clientHeight > campo.clientHeight) {
        coordBola.top = campo.clientHeight - bola.clientHeight;
    }

    bola.style.left = coordBola.left + "px"
    bola.style.top = coordBola.top + "px"
})


// ver como fazer o resto

// 19)

// let remover = document.querySelector("#container")

// remover.addEventListener("click", (event) => {
//     let target = event.target 
//     if (target.tagName != "BUTTON") return
//     target.parentNode.remove()
// })

// 20)

// let mago = document.querySelector(".tree")

// function handler (event) {
//     if (event.type == "mousedown") {
//         let alvo = event.target

//         if (!alvo.childNodes || alvo.parentElement.tagName == "BODY") return
//         //!alvo para retornar falso se tiver
//         let shazam = alvo.childNodes

//         for (let i of shazam) {
//             i.hidden = !i.hidden
//         }
//     }
// }

// mago.addEventListener("mousedown", handler)

// 21)

// let tabela = document.querySelector("table")
// let linhas = tabela.rows

// let celulas = linhas[0].cells[0]

// for(elemento of linhas) {
//     let celula = elemento.cells

//     for(celulas of celula) {
//         let texto = celulas.textContent

//         if(texto[0] == texto[2]) {
//             celulas.style.backgroundColor = "red"
//         }
//     }
// }

// 22)

// let organizador = document.querySelector("#grid")
// organizador.addEventListener("click", (e) => {
//     if (e.target.tagName != 'TH') return

//     let th = e.target
//     handler(th.cellIndex, th.dataset.type)
// })

// // document.querySelectorAll("th").forEach(th => th.addEventListener("click", handler));

// function handler(colNum, type) {

//     let tbody = organizador.querySelector('tbody')
//     let rowsArray = Array.from(tbody.rows)            
//     let compare

//     switch (type) {
//         case 'number':
//             compare = function(rowA, rowB) {
//             return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
//             }
//             break

//         case 'string':
//             compare = function(rowA, rowB) {
//             return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1
//             }
//             break
//     }

//     rowsArray.sort(compare)

//     tbody.append(...rowsArray)

// }

