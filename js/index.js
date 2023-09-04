// CONTANTES E VARIAVEIS
let palavra0 = ['F','O','T','O','G','R','A','F','I','A']
let palavra1 = ['C','A','R','R','O']
let palavras = [palavra0, palavra1]
const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let chances = 6
    const localChances = document.querySelector('.chances')
    const perdeu = document.querySelector('.perdeu')
    const ganhou = document.querySelector('.ganhou')
    const palavraSecreta = document.querySelector('.palavra-secreta')
    const palavraCorreta = document.querySelector('.palavra-correta')


    let contadorPalavras = 0

    let palavraAtual = 'palavra' + contadorPalavras
    console.log(palavraAtual)

// CRIA AS LINHAS COM CADA LETRA ESCONDIDA
for(var i = 0; i < palavra0.length; i++){

    let letra =document.createElement('p')
    letra.setAttribute('class', 'letra escondido')
    letra.setAttribute('id', 'letra' + i)
    letra.innerHTML = palavra0[i]
    
    let linhaLetra = document.createElement('p')
    linhaLetra.setAttribute('class', 'linha')
    linhaLetra.appendChild(letra)
    palavraSecreta.appendChild(linhaLetra)
}
criaTeclado()

// CRIA TECLADO
function criaTeclado(){
const teclado = document.querySelector('.teclado')

for(let c = 0; c< alfabeto.length; c++){

    let tecla = document.createElement('input')
    tecla.setAttribute('type', 'button')
    tecla.setAttribute('value', alfabeto[c])
    tecla.setAttribute('class', 'tecla')
    tecla.setAttribute('onclick', 'teclaPressionada(event)')

    teclado.appendChild(tecla)
}
}

    



let contadorLetrasReveladas = 0
console.log(palavra0,length)

palavraCorreta.innerHTML = palavra0.join('')



function teclaPressionada(event) {
    let btn = event.target;
    let btnLetra = btn.value;

    let letrasReveladas = 0

    for( let o = 0; o < palavra0.length; o++){
        if(palavra0[o] === btnLetra){

            document.getElementById('letra' + o).style.display = 'block'

            letrasReveladas++
            contadorLetrasReveladas++
            console.log(contadorLetrasReveladas)

            if(contadorLetrasReveladas == palavra0.length){
                ganhou.style.display = 'block'
                ganhou.style.opacity = '1';
                
            }
            

            

        }

    }

    

    if(letrasReveladas === 0){

        errou()
    }

    btn.setAttribute('class', 'pressionado')
    btn.removeAttribute('onclick', 'teclaPressionada(event)')
    
    
}

    

function errou(){

    let todasTeclas = document.querySelectorAll('.tecla')
    chances--

    localChances.innerHTML = `Chances: ${chances}/6`

    

    const hang = document.querySelector('.hang')
    hang.src = 'images/hangman-' + chances +'.svg'

    if(chances === 0){

        for (let i = 0; i < todasTeclas.length; i++) {
            todasTeclas[i].setAttribute('class', 'pressionado');
            todasTeclas[i].removeAttribute('onclick', 'teclaPressionada(event)');
        }
        

        
        palavraCorreta.innerHTML = palavra0.join('')
        perdeu.style.display = 'block'
        perdeu.style.opacity = '1'; // Define a opacidade para 1 para tornar a div visível

        
        

    }
    const valorMinimo = 1; // O valor mínimo desejado

    if (chances < valorMinimo) {
    chances = valorMinimo; // Atribui o valor mínimo se for menor
        }

}
