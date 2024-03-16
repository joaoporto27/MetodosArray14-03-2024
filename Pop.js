//EXEMPLO 1
//O comando pop() serve para remover o último elemento de um array
//Primeiro criei a variável times da serie A
let TimesDaSerieA = ['Palmeiras ', ' Corinthians ', ' São Paulo ', ' Flamengo ', ' Santos '];

//Em seguida criei a variável time removido 
let TimeRemovido = TimesDaSerieA.pop();

//Depois criei 2 console.log, um para mostrar o time removido e outro para mostrar a lista depois da remoção 
console.log('Time removido: ' + TimeRemovido);
console.log('Lista atualizada: ' + TimesDaSerieA);

//EXEMPLO 2
//Primeiro criei a variável esportes 
let esportes = ['Futebol ', ' Basquete ', ' Vôlei ', ' Tênis ', ' Golf '];

//Em seguida criei a variável esporte removido 
let EsporteRemovido = esportes.pop();

//Depois Criei 2 console.log, um para ver o esporte removido e outro para ver a nova lista
console.log('Nova lista: ' + esportes);
console.log('Lista removida: ' + EsporteRemovido);