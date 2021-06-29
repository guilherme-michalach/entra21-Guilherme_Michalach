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

let addDiv = document.createElement("div")
    addDiv.className = "notificacao"
    addDiv.textContent = "Um alerta simples"
    //remover esse textContent depois

    document.body.append(addDiv)

    addDiv.style.color = 'blue'
    addDiv.style.top = '10'
    addDiv.style.right = '10'
    https://www.w3schools.com/jsref/prop_style_border.asp

    function notificacao() {
    
}