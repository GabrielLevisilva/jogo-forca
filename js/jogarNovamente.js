console.log('verificador 1')

const btnJogarNovamente = document.querySelector('.btn-jogar-novamente')



 function jogarNovamente(){
    let todasTeclas = document.querySelectorAll('.pressionado')

    contadorPalavras++
    console.log(contadorPalavras)
    console.log(todasTeclas)
    
    perdeu.style.display = 'none'
    ganhou.style.display = 'none'

    for(let i = 0; i < todasTeclas.length; i++){

        todasTeclas[i].setAttribute('class', 'tecla')
        todasTeclas[i].setAttribute('onclick', 'teclaPressionada(event)')

        chances = 6
        localChances.innerHTML = `Chances: ${chances}/6`
        const hang = document.querySelector('.hang')
        hang.src = 'images/hangman-' + chances +'.svg'

        for(let r = 0; r < palavra0.length; r++){
            document.getElementById('letra' + r).style.display = 'none'
            contadorLetrasReveladas = 0
        }
        
    }
    

 }
 
 console.log('letras reveladas ' + contadorLetrasReveladas)