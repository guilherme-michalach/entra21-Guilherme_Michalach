// 1)

// let tabela = document.querySelector("UL")

//     tabela.addEventListener("click", (event) => {
//         if(event.target.tagName != "LI") return

//         if(event.ctrlKey) {
//             multiSelecao(event.target)
//         } else {
//             selecao(event.target)
//         }
//     })

// function selecao(li) {
//     let liSelecionada = tabela.querySelectorAll(".selecionada")

//     for(let element of liSelecionada) {
//         element.classList.remove("selecionada")
//     }
    
//     li.classList.add("selecionada")
// }

// function multiSelecao(li) {
//     // linhas.style.backgroundColor = "yellow"
//     li.classList.toggle("selecionada")
// }

// 2)

// usa-se 3 pontos pra acrescentar mais parametros, tal como se eu colocasse 
// mais uma tecla pra puxar a função, funcionaria igual

// set é provavelmente pra nunca ter nada repetido nem algo do tipo, ver melhor

// function rodaNasTeclas(func, ...codes) {
//     let teclaPress = new Set()

//     document.addEventListener("keydown", function(event) {
//         teclaPress.add(event.code)
    
//     for(let code of codes) {
//         if (!teclaPress.has(code)) return
//     }

//     teclaPress.clear()
//     func()

//     })

//     document.addEventListener('keyup', function(event) {
//         teclaPress.delete(event.code)
//     })
// }

// rodaNasTeclas(
//     () => alert("Tais insano?"),
//     "KeyQ",
//     "KeyW",
// )

// 3)

let botao = document.querySelector(".voltar")
    botao.addEventListener("click", () => {
        window.scrollTo(pageXOffset, 0)
    })

window.addEventListener("scroll", function() {
    botao.hidden = (pageYOffset < document.documentElement.clientHeight)
})

