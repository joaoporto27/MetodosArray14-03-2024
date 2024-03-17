//EXEMPLO 1
//O método .concat() é usado para combinar dois ou mais arrays em um único array
//Primeiro criei 2 variáveis chamada "lista1" e "lista2" para combiná-las usando o .concat()
let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];

//Para combinar os arrays criei a variável "listacombinada" e usei o .concat() para combiná-las 
let listacombinada = lista1.concat(lista2);

//Em seguida utilizei o "console.log(listacombinada)" para mostrar a lista combinada 
console.log(listacombinada);

//EXEMPLO 2
//Primeiro criei as variáveis chamada "Frutas" e "Legumes"
let Frutas = ['Maçã,' , ' Banana,' , 'Melancia '];
let Legumes = ['Tomate,' + ' Cenoura,' , ' Pimentão'];

//Em seguida criei a variável "Alimentos" para combinar as variáveis "Frutas" e "Legumes"
let Alimentos = Frutas.concat(Legumes);

//Em seguida usei o "console.log(Alimentos)" para exibi-los juntos 
console.log(Alimentos);
