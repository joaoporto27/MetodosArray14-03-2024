//EXEMPLO 1 
//O comando map() serve para transformar cada elemento de um array usando uma função específica     
//Primeiro criei a variável chamada "numeros" e adicionei 4 números a ela
let numeros = [15, 18, 25, 39];

//Em seguida criei outra variável chamada numerosdobrados que é igual a numeros.map((i) => {return i * 2}), a variável i funciona para multiplicar o número vezes 2 já o return para só retornar a lista o número dobrado
numerosdobrados = numeros.map((i) => { return i * 2 });

//Depois usei o "console.log(numerosdobrados)"" para exibir a lista somente com os números dobrados
console.log(numerosdobrados);

//EXEMPLO 2
//Primeiro criei a variável chamada "numeros2"
let numeros2 = [15, 18, 25, 39];

//Em seguida criei outra variável chamada "numerosdividospor2" que funciona da mesma maneira que o exemplo anterior só que ao invés de multiplicar irei dividir por 2
let numerosdividospor2 = numeros2.map((i) => { return i / 2 });

//Depois criei o "console.log(numerosdividospor2)" para ver a lista somente com os números divididos 
console.log(numerosdividospor2);