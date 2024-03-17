//O método .splice() serve para adicionar, remover ou substituir elementos em um Array 
//Exemplo de substituição de um elemento 
//Primeiro irei criar a variável "frutas"
let frutassubstituição = ['Maçã', 'Kiwi', 'Uva'];

//Em seguida irei utilizar o método .splice() para substituir o elemento 1 (kiwi) e adicionar ao elemento 1 a banana 
frutassubstituição.splice(1, 1, 'Banana');
// frutas.splice(1, 1, 'Banana') o primeiro 1 significa onde quero adicionar outro elemento, o segundo 1 é o número de elementos que eu quero que seja removido, já 'Banana' é o que eu quero que seja adicionado 

//Depois crio o console.log para mostrar a alteração a lista
console.log(frutassubstituição);

//Exemplo de remoção
//Primeiro irei criar a variável "frutasremoção"
let frutasremoção = ['Maçã', 'Banana', 'Limão', 'Laranja', 'Uva'];

//Em seguida utilizo o .splice() para remover o elemento 'Limão'    
frutasremoção.splice(2, 1);
//frutasremoção.splice(2, 1) o 2 significa o elemento que quero que seja removido e o 1 significa quantos itens serão removidos 

//Agora é só utlizar o console.log para mostrar as frutas com a remoção
console.log(frutasremoção);

//Exemplo de adicionar
//Primeiro crio a variável "frutasadicionar"
let frutasadicionar = ['Maçã', 'Banana', 'Laranja'];

//Em seguida utilizo o .splice() para adicionar o elemento 'Uva'
frutasadicionar.splice(2, 0, 'Uva');
//frutasadicionar.splice(2, 0, 'Uva') o 2 significa onde eu quero que ele seja adicionado, o 0 quantos itens serão removidos e a 'Uva' é o elemento a ser adicionado 

//Depois é só criar o console.log() para exibir o item adicionado
console.log(frutasadicionar);