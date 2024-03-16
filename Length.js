//EXEMPLO 1
//O comando .length serve para contabilizar o número de objetos em uma variável 
//Adicionei a variável "Frutas" com um valor indefinido
let frutas = [];

//Logo em seguida adicionei algumas frutas 
frutas.push('Banana');
frutas.push('Maçã');
frutas.push('Uva');
frutas.push('Mamão');
frutas.push('Kiwi');
frutas.push('Morango');

//Depois de adicionar algumas frutas usei o método Length que define um valor a variável com base na quantidade de objetos que possui
let NumeroDeFrutras = frutas.length;

//Depois desses passos usei o "console.log(NumeroDeFrutas)" para que que quando colocasse o código para rodar ele exibisse o valor da quantidade que a variável possui
console.log('Número de Frutas na lista: ' + NumeroDeFrutras);

//EXEMPLO 2
//Criei a variável chamada "ArcoÍris"
let ArcoÍris = ['Vermelho', ' Laranja', ' Amarelo', ' Verde', ' Azul', ' Anil', ' Violeta'];

//Em seguida criei a variável "CoresTotal" 
let CoresTotal = ArcoÍris.length

//Depois criei o "console.log(CoresTotal)"
console.log('Números Totais no Arco-Íris: ' + CoresTotal);