// CONTANTES E VARIAVEIS
let palavra0 = ['F','O','T','O','G','R','A','F','I','A']
let dica0 = ['Ele captura sua aparência']
let palavra1 = ['B','O','L','A','C','H','A']
let dica1 = ['Um alimento que esfarela']
let palavra2 = ['A','B','A','C','A','X','I']
let dica2 = ['Uma fruta considerada rei']
let palavra3 = ['D','I','N','H','E','I','R','O']
let dica3 = ['A raiz de todo mal']
let palavra4 = ['A','N','A','T','O','M','I','A']
let dica4 = ['O seu corpo']
let palavras = [palavra0, palavra1, palavra2, palavra3, palavra4]
let dicas = [dica0, dica1, dica2, dica3, dica4]
const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let chances = 6
    const localChances = document.querySelector('.chances')
    const perdeu = document.querySelector('.perdeu')
    const ganhou = document.querySelector('.ganhou')
    const palavraSecreta = document.querySelector('.palavra-secreta')
    const palavraCorreta = document.querySelector('.palavra-correta')
    let contadorPalavras = 0

    // if(contadorPalavras == 4){
    //     alert('O jogo acabou! Obrigado por Jogar1')
    // }
    
    // console.log('verificador 1')


    // DICAS
    console.log('DICA CARREGADA index ' + contadorPalavras)
    const dica = document.querySelector('.dica')
    dica.innerHTML = 'Dica: ' + dicas[contadorPalavras]

// CRIA AS LINHAS COM CADA LETRA ESCONDIDA
for(var i = 0; i < palavras[contadorPalavras].length; i++){

    let letra =document.createElement('p')
    letra.setAttribute('class', 'letra escondido')
    letra.setAttribute('id', 'letra' + i)
    letra.innerHTML = palavras[contadorPalavras][i]
    
    let linhaLetra = document.createElement('p')
    linhaLetra.setAttribute('class', 'linha')
    linhaLetra.appendChild(letra)
    palavraSecreta.appendChild(linhaLetra)
}

console.log('verificador 2 LINHAS FORAM CRIADAS')

criaTeclado()
console.log('Cria teclado função')
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
console.log('verificador 3 TECLADO CRIADO')
}

    



let contadorLetrasReveladas = 0


palavraCorreta.innerHTML = palavras[contadorPalavras].join('')



function teclaPressionada(event) {

    console.log('Função tecla pressionada')
    let btn = event.target;
    let btnLetra = btn.value;

    let letrasReveladas = 0

    for( let o = 0; o < palavras[contadorPalavras].length; o++){
        if(palavras[contadorPalavras][o] === btnLetra){

            document.getElementById('letra' + o).style.display = 'block'

            letrasReveladas++
            contadorLetrasReveladas++
            console.log(contadorLetrasReveladas)

            if(contadorLetrasReveladas == palavras[contadorPalavras].length){
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
    
    console.log('verificador 4 TECLAS PRONTAS PARA SEREM PRESSIONADAS')
}

    

function errou(){
    console.log('Função errou')
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
        

        
        palavraCorreta.innerHTML = palavras[contadorPalavras].join('')
        perdeu.style.display = 'block'
        perdeu.style.opacity = '1'; // Define a opacidade para 1 para tornar a div visível

        
        

    }
    const valorMinimo = 1; // O valor mínimo desejado

    if (chances < valorMinimo) {
    chances = valorMinimo; // Atribui o valor mínimo se for menor
        }

}


