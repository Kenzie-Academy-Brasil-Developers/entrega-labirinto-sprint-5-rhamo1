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

//verificar a posicao do jogador 
//classes wall e caminho

let x = [0] 
let y = [9] 

let pTop = 180
let pLeft = 0

const move = (key) => {

    if (key === "ArrowDown") {
        if (map[x][returnSumArray(y)] === " ") {
            y = returnSumArray(y)
            pTop += 20
            pxMove(pLeft, pTop)
        }

    }

    if (key === "ArrowUp") {

        if (map[x][returnSubArray(y)] === " ") {
            y = returnSubArray(y)
            pTop -= 20
            pxMove(pLeft, pTop)

        }

    }

    if (key === "ArrowRight") {
        console.log(map[returnSumArray(x)][y])
        if (map[returnSumArray(x)][y] === " ") {
            x = returnSumArray(x)
            pLeft += 20
            pxMove(pLeft, pTop)
            
        }
    }
    
    if (key === "ArrowLeft") {
        if (map[returnSubArray(x)][y] === " ") {
            x = returnSubArray(x)
            pLeft -= 20
            pxMove(pLeft, pTop)
            
        }
    }
    console.log(pTop, pLeft)
    
}

const returnSumArray = arr =>{
    let sumArray = []
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        sumArray.push(num + 1)
    }
    return sumArray
}

const returnSubArray = arr =>{
    let subArray = []
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        subArray.push(num - 1)
    }
    return subArray
}


const mapMove = (x, y) => {

    if (map[x][y] === " ") {
        return true
    }
    if (map[x][y] === "W") {
        return false
    }
}

const pxMove = (x, y) => {
    const player = document.getElementById('jogador')

    player.style.left = `${x}px`
    player.style.top = `${y}px`
}






const jogo = () => {

    const labirinto = document.getElementById('labirinto')

    map.forEach(linha => {

        const novaLinha = document.createElement('div')
        novaLinha.classList.add('linha')

        linha = linha.split('')

        linha.forEach(letra => {
            const novoBloco = document.createElement('div')
            const novoJogador = document.createElement('div')


            if (letra === 'W') {
                novoBloco.classList.add('wall', 'caixinha')
            }
            else if (letra === 'S') {
                novoBloco.classList.add('start', 'caixinha')
                novoJogador.id = 'jogador'
                novoJogador.classList.add('labirinto')
            }
            else if (letra === 'F') {
                novoBloco.classList.add('finish', 'caixinha')
            }
            else {
                novoBloco.classList.add('caminho', 'caixinha')
            }
            novaLinha.appendChild(novoBloco)
            novaLinha.appendChild(novoJogador)
        })
        labirinto.appendChild(novaLinha)
    })


}

document.addEventListener('keydown', (event) => {
    let keyName = event.key;

    move(keyName)

});
jogo()