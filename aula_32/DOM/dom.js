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

// let campo = document.querySelector(".campo"),
//     bola = document.querySelector(".bola")

// campo.addEventListener("click", (event)

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



// 22)

let organizador = document.querySelector("#grid")
// let organizar = document.querySelector("#grid").addEventListener("click", handler);
document.querySelectorAll("th").forEach(th => th.addEventListener("click", handler));

function handler(event) {
    let clique = event.target
    if (!clique.dataset.type) return
    alert("lol")

    let corpo = document.querySelector("tbody").children
    let check = corpo[0]
    let check2 = corpo[1]

    if(clique.dataset.type == "number") {
        let selecionador = organizador.rows[1].cells[0].textContent
        console.log(selecionador)
        let selecionador2 = organizador.rows[2].cells[0].textContent
        console.log(selecionador2)

        for(let i = 0; i < 2; i++) {
            if (selecionador2.textContent > selecionador.textContent) {
                console.log("maior")
            }
        }
    }
        
    if(clique.dataset.type == "string") {
        let selecionador = organizador.rows[1].cells[1]
        console.log(selecionador)
        let selecionador2 = organizador.rows[2].cells[1]
        console.log(selecionador2)
    }

    // console.log(check)
    
}

