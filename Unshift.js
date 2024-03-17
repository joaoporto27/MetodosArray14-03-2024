//EXEMPLO 1
//O método .unshift() serve para adicionar 1 ou mais elementos em um array
//Para esse exemplo irei usar quase a mesma lógica que usei o .shift(), primeiro irei criar a variável "rotina"
let rotina = ['Arrumar a cama', ' Passear com o meu cachorro', ' Tomar banho', 'Ir para a escola'];

//Depois irei criar a variável "rotinaantes" para mostrar ela sem as alterações feitas
let rotinaantes = rotina.slice(0, 4); //Usei o método slice para mostrar a variável "rotina" sem nenhuma alteração

//Em seguida irei utilizar o .unshift() para fazer alterações na minha rotina 
rotina.unshift('Arrumar o material', 'Lavar a louça');

//Em seguida irei utilizar o console.log para mostrar minha rotina antes e depois
console.log('Minha rotina antes: ' + rotinaantes);
console.log('Minha rotina depois: ' + rotina);

//EXEMPLO 2
//Primeiro irei criar a variável "lista"
let lista = [4, 5, 6, 7];

//Em seguida utilizei o comando .slice() para mostrar a lista incompleta 
listaincompleta = lista.slice(0, 4);

//Depois utilizei a variável "lista" e adicionei os números iniciais que faltavam com o .unshift()
lista.unshift(1, 2, 3);

//Agora criei o console.log para mostrar a lista antes e a lista depois
console.log('Lista incompleta: ' + listaincompleta);
console.log('Lista completa: ' + lista);