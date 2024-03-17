//EXEMPLO 1
//O método .reverse() serve para inverter os itens de um array o primeiro se torma o último e o último se torna o primeiro
//Primeiro criei a variável "classificação"
let classificação = ['1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º', '10º'];

//Criei o console.log() para mostrar a classificação antes de utilizar o método .reverse()
console.log('Classificação crescente: ' + classificação);

//Em seguida irei utlizar o método .reverse() para inverter a ordem da classificação que ao invés de ser uma crescente fique uma decrescente
let classificaçãodecrescente = classificação.reverse();

//Depois criei console.log() para exibir a classificação depois 
console.log('Classificação decrescente: ' + classificaçãodecrescente);

//EXEMPLO 2
//Nesse exemplo irei criar a variável "palavras"
let palavras = ['Olá' , 'professor' , 'Thiago' , '!'];

//Em seguida irei juntar as palavras em uma frase e inverter ela para isso crio a variável "fraseinvertida"
let fraseinvertida = palavras.reverse().join(" "); //utilizei o comando .join() para deixar a frase com espaço entre as palavras

//Depois criei o console.log() para exibir a frase invertida
console.log(fraseinvertida);