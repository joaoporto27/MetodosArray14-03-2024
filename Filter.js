//EXEMPLO 1
//O Filter é utilizado para remover elementos indesejados com base em alguma condição como exemplo: 
//Adicionei a variável chamada "numeros" e fiz uma lista de 1 á 9
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

//Depois pedi que o comando filter selecione apenas números maiores que 3 para a minha lista criando a variavel chamada "numerosFiltrados"
let numerosFiltrados = numeros.filter(numero => numero > 3);

//Em seguida utilizei o "console.log(numerosFiltrados)" para aparecer a lista com números maiores que 3
console.log(numerosFiltrados);

//EXEMPLO 2

//Adicionei a variável chamada ""numeros2" e fiz uma lista de 1 á 9
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

//Nesse exemplo, vou selecionar apenas números menores que 6 para isso criei a variável chamada "numerosFiltrados2"
let numerosFiltrados2 = numeros2.filter(numero => numero < 6 );

//Em seguida, utilizei o console.log(numerosFiltrados) para aparecer a lista com números menores que 6
console.log(numerosFiltrados2);
