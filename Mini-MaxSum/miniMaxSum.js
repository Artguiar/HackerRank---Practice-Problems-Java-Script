/* https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

Explicação da Lógica do Exercício - 

O desafio "Mini-Max Sum" pede que você calcule a soma mínima e máxima possíveis de quatro números escolhidos dentre cinco números dados.
 Você deve ignorar um número e calcular a soma dos outros quatro. Isso deve ser feito para todos os cinco números, de modo que você acabe 
 com cinco somas diferentes. Então você deve encontrar o valor mínimo e máximo dessas cinco somas.

Para resolver este problema, você deve primeiro ler os cinco números e armazená-los em uma lista ou array. Em seguida, 
você deve usar um loop para iterar sobre esses números e calcular a soma dos quatro números restantes sempre que um número é ignorado.
Armazene essas somas em outra lista ou array. Depois disso, você pode usar a função min() e max() para encontrar o valor mínimo e máximo 
das somas calculadas e imprimi-los como a resposta. */

/* Explicação do código montado para o exercício - 

Primeiro, criamos as variáveis minSum e maxSum, inicializadas com o valor máximo e mínimo seguros que o JavaScript suporta.
Então usamos um loop para iterar sobre os elementos do array. Dentro desse loop, outro loop é usado para calcular a soma 
dos outros quatro números quando um número é ignorado. Verificamos se a soma atual é menor do que minSum, se for, atualizamos minSum.
Verificamos se a soma atual é maior do que maxSum, se for, atualizamos maxSum. Finalmente, imprimimos o valor de minSum e maxSum.

*/

function miniMaxSum(arr) {
    let minSum = Number.MAX_SAFE_INTEGER;
    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                sum += arr[j];
            }
        }
        if (sum < minSum) {
            minSum = sum;
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    console.log(minSum + " " + maxSum);
}

let array = [1, 3, 5, 7, 9];
miniMaxSum(array); // Prints "16 24"

/* Explicação do código Refatorado - 

Primeiro, criamos as variáveis minSum e maxSum, inicializadas com o valor máximo e mínimo seguros que o JavaScript suporta.
Então usamos um loop para iterar sobre os elementos do array. Dentro desse loop, outro loop é usado para calcular a soma 
dos outros quatro números quando um número é ignorado. Verificamos se a soma atual é menor do que minSum, se for, atualizamos minSum.
Verificamos se a soma atual é maior do que maxSum, se for, atualizamos maxSum. Finalmente, imprimimos o valor de minSum e maxSum.

*/

console.log('__________________________________________________________________________________________________________________________')

function miniMaxSum(arr1) {
    const sum1 = arr1.reduce((acc, val) => acc + val);
    console.log(`${sum1 - Math.max(...arr1)} ${sum1 - Math.min(...arr1)}`);
}

let array1 = [1, 3, 5, 7, 9];
miniMaxSum(array1); // Prints "16 24"
