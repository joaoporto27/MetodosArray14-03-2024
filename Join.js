//EXEMPLO 1
//O método .join() serve para unir os elementos de um array em uma única string, usando alguma separação qualquer
//Primeiro irei criar a variável "numeros"
let numeros = [1, 2, 3, 4, 5];

//Em seguida criei a variável "numerosseparados" e irei separar os "numeros" com hífen 
let numerosseparados = numeros.join("-");

//Agora é só criar o console.log para exibi-los com hífen na separação
console.log(numerosseparados);

//EXEMPLO 2
//Primeiro irei criar a variável "palavras" e adicionar algumas palavras
let palavras = ['Olá' , 'professor' , 'Thiago' , '!'];

//Em seguida irei criar a variável "frase" para exibir todas as palavras da variável "palavras" juntas
let frase = palavras.join(' ');

//Agora é só utilizar o console.log para montar a frase 
console.log(frase);