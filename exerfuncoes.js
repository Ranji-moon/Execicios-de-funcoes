//a) A função não deve receber nenhum parâmetro e deve imprimir uma 
//mensagem falando algumas informações sobre você, como: 
//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
//Lembrando que a função não possui entradas, apenas imprime essa mensagem.

//função tradicional
function imprimir() {
    return "Eu sou a Sara, tenho 17 anos, moro em Sao leopoldo e sou estudante."
}
console.log(imprimir())

//arrow function
let meuDados = (param) => {
    return "Eu sou a Sara, tenho 17 anos, moro em Sao leopoldo e sou estudante."
}
console.log(imprimir())

//expressão de função
let meusDados = function (param) {
    return "Eu sou a Sara, tenho 17 anos, moro em Sao leopoldo e sou estudante."
}
console.log(imprimir())

//Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
// o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
//Ela deve retornar uma string que unifique todas as info da pessoa em uma só mensagem com o template:

function dadosPessoais(nome, idade, cidade, profissão) {
    return `Oi ${nome}, tenho ${idade}. moro ${cidade} e sou ${profissão}`
}

alert(dadosPessoais('azul', 17, 'sapucaia', 'estudante'))

//a) Escreva uma função que receba 2 números como parâmetros, 
//e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
//Invoque a função e imprima no console o resultado.

//function calcularNumeros(num1, num2) {}
//console.log(calcularNumeros)

//b)criar função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
function retornarMaior(p1, p2) {
    return p1 >= p2
}
alert(retornarMaior(Number(123), Number(4)))

//Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function retornarPar(n1) {
    return n1 % 2 === 0
}
alert(retornarPar(8))

// Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem,
// juntamente com uma versão dela em letras maiúsculas

//Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro
let imprimirSoma = (conteudo) => {//modelo arrow function
    return conteudo
}
//alert(desafioA('oito'))

//Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno.
//Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
let desafioB = (num1, num2)  => {//modelo arrow function
   let soma = num1 + num2
   let resultado = imprimirSoma(soma);
   alert(resultado)
}
console.log(desafioB(4, 5))