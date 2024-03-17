//EXEMPLO 1
//O método .slice() serve para copiar partes de um array ou string sem modificar o array ou a string original
//Primeiro vou criar a variável "Animais"
let Animais = ['Leão', 'Tigre', 'Elefante', 'Girafa', 'Aranha'];

//Em seguida vou criar a variável "AnimaisAltos" e a variável "Animais.slice(2, 4)", ele serve para copiar os elementos que estão entre o índice 2 e 4
let AnimaisAltos = Animais.slice(2, 4);

//Depois criei o console.log para mostrar quais são os animais altos
console.log('Os Animais altos são: ' + AnimaisAltos);

//EXEMPLO 2
//Primeiro irei criar a variável "numeros"
let numeros = [5,10,15,20,25,30];

//Depois irei criar a variável "primeirosnumeros"  para ver quais números são os primeiros
let primeirosnumeros = numeros.slice(0,4);

//Em seguida irei criar o console.log para exibi-los 
console.log(primeirosnumeros);