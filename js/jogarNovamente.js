

const btnJogarNovamente = document.querySelector('.btn-jogar-novamente')


    
 function jogarNovamente(){
    

    console.log('Função Jogar novamente')
    let todasTeclas = document.querySelectorAll('.pressionado')

    contadorPalavras++

    if(contadorPalavras >= palavras.length){
        alert('O jogo acabou! Obrigado por Jogar')

        acabou()
    }
    else{

        console.log('DICA CARREGADA jogarNovamente ' + contadorPalavras)
    dica.innerHTML = 'Dica: ' + dicas[contadorPalavras]
    
    perdeu.style.display = 'none'
    ganhou.style.display = 'none'

    for(let i = 0; i < todasTeclas.length; i++){

        todasTeclas[i].setAttribute('class', 'tecla')
        todasTeclas[i].setAttribute('onclick', 'teclaPressionada(event)')

        chances = 6
        localChances.innerHTML = `Chances: ${chances}/6`
        const hang = document.querySelector('.hang')
        hang.src = 'images/hangman-' + chances +'.svg'

        for(let r = 0; r < palavras[contadorPalavras].length; r++){
            const elementoLetra = document.getElementById('letra' + r)
            contadorLetrasReveladas = 0
            if(elementoLetra){
                elementoLetra.style.display = 'none'
            }
            
        }
    }

    // REMOVER OS VALORES DAS LINHAS
    for(let j = 0; j < palavras[contadorPalavras -1].length; j++){
    
        let letra = document.querySelector('.letra')
        let linha = document.querySelector('.linha')
        linha.remove()
        letra.remove()
    }

    // CRIAR VALORES DAS LINHAS NOVAMENTE

    for(var i = 0; i < palavras[contadorPalavras].length ; i++){

        console.log('valor2 ' + i)
        console.log('cont ' + contadorPalavras)

        let letra =document.createElement('p')
        letra.setAttribute('class', 'letra escondido')
        letra.setAttribute('id', 'letra' + i)
        letra.innerHTML = palavras[contadorPalavras][i]
        
        let linhaLetra = document.createElement('p')
        linhaLetra.setAttribute('class', 'linha')
        linhaLetra.appendChild(letra)
        palavraSecreta.appendChild(linhaLetra)
    }

    
    console.log('letras reveladas ' + contadorLetrasReveladas)

    }

    

 }
 
 

//  idNivel()

//  let cont = 1

// function idNivel(){
// const idNivel = document.querySelector('#id-nivel')
// cont++
// idNivel.innerHTML = 'Nível ' + cont
// }
