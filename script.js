const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

//html dom
//mapear map

//verificar a posicao do jogador 
//classes wall e caminho
//validar movimento

//condicao vitoria

let audio = new Audio('win.mp3')



const player = document.createElement("div")
player.classList.add("jogador")
player.id = 'player'

const jogo = () => {

    const labirinto = document.getElementById('labirinto')

    for (let i = 0; i < map.length; i++) {
        let linhaDiv = document.createElement("div")
        linhaDiv.classList.add("linha")
        colunaMap = map[i]

        for (let j = 0; j < colunaMap.length; j++) {
            let caixaDiv = document.createElement("div")
            caixaDiv.classList.add("caixinha")

            let caixaMap = colunaMap[j]


            caixaDiv.dataset.line = i
            caixaDiv.dataset.col = j


            if (caixaMap === " ") {
                caixaDiv.classList.add('caminho')

            } else if (caixaMap === 'W') {
                caixaDiv.classList.add('wall')

            } else if (caixaMap === 'S') {
                caixaDiv.classList.add('start')
                caixaDiv.classList.add('start')
                caixaDiv.appendChild(player);

            } else if (caixaMap === 'F') {
                caixaDiv.id = "end"
                caixaDiv.classList.add("finish")
            }
            caixaDiv.append(caixaMap);

            linhaDiv.appendChild(caixaDiv)
        }
        labirinto.appendChild(linhaDiv)
    }
   

}

function moves(event) {
    const tecla = event.key;
    let linhaAtual = Number(player.parentElement.getAttribute('data-line'));
    let colunaAtual = Number(player.parentElement.getAttribute('data-col'));
    let moveNext;

    if (tecla === 'ArrowUp') {
        moveNext = labirinto.children[linhaAtual - 1].children[colunaAtual];

        if (moveNext.classList.contains('caminho')) {
            moveNext.appendChild(player)
        }
    } else if (tecla === 'ArrowDown') {
        moveNext = labirinto.children[linhaAtual + 1].children[colunaAtual];

        if (moveNext.classList.contains('caminho')) {
            moveNext.appendChild(player)
        }
    }

    if (tecla === 'ArrowLeft') {
        moveNext = labirinto.children[linhaAtual].children[colunaAtual - 1]

        if (moveNext.classList.contains('caminho')) {
            moveNext.appendChild(player)
        }
    } else if (tecla === 'ArrowRight') {
        moveNext = labirinto.children[linhaAtual].children[colunaAtual + 1];

        if (moveNext.classList.contains('caminho')) {
            moveNext.appendChild(player)
        }
    }

    vitoria(moveNext)
}

const vitoria = (ultimo) => {
    if(ultimo.id === 'end'){
        audio.play()
        alert('Você venceu!!')
    }
}

document.addEventListener('keydown', (event) => {
    moves(event)

})
jogo()