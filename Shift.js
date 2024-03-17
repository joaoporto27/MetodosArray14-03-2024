//EXEMPLO 1
//O método .shift() serve para remover o primeiro elemento de um array
//Primeiro crio a variável "Rotina"
let rotina = ['Arrumar a cama', ' Passear com o meu cachorro', ' Tomar banho', 'Ir para a escola'];

//E depois crio a variável "rotinaantes"
let rotinaantes = rotina;

//Em seguida crio o "console.log(rotina antes)"
console.log(rotinaantes);

//Depois vamos supor que eu arrumei a minha cama por isso tenho que remover esse item para continuar minha rotina, então crio a variável "rotinadepois" para simular que a primeira tarefa foi feita
let rotinadepois = rotina.shift();

//Agora é só criar 2 console.log para um mostrar minha rotina depois do primeiro item ser feito e um para mostrar qual foi o item que eu fiz 
console.log('Minha rotina depois: ' + rotinaantes);
console.log('Meu item da rotina feita: ' + rotinadepois);

//EXEMPLO 2
//Primeiro irei criar a variável "rodadas" 
let rodadas = ['1ª', '2ª', '3ª', '4ª', '5ª'];

//Supondo que estamos em um campeonato e que a primeira rodada acabou de acontecer precisamos para isso irei criar a variável "rodadajogada"
let rodadajogada = rodadas.shift();

//Depois de ter criado a variável "rodadajogada" agora irei criar a variável "rodadasrestantes" para mostrar quantas faltam 
let rodadasrestantes = rodadas;

//Depois de ter criado essas variáveis criei dois console.log para mostrar a rodada jogada e quantas rodadas faltam 
console.log('Rodada jogada: ' + rodadajogada);
console.log('Rodadas restantes: ' + rodadasrestantes);