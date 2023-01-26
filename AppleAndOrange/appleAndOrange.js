/*
 Explicação do exercício - 

    O exercício proposto é resolver duas contagens de frutas: maçãs e laranjas, que caem em uma área a partir de suas respectivas árvores.
A área é definida por dois pontos: uma casa (onde a contagem deve ser feita) e dois limites (esquerdo e direito) que define a
área em que as frutas devem ser contadas.

    A entrada consiste em seis inteiros: s e t (os limites esquerdo e direito da casa), a e b (as posições das árvores de maçãs e laranjas,
respectivamente), m e n (o número de maçãs e laranjas que caem respectivamente). Em seguida, há dois conjuntos de m e n inteiros,
representando as distâncias que as maçãs e laranjas caem a partir de suas respectivas árvores.

    A saída deve ser duas contagens inteiras, representando o número de maçãs e laranjas que caem dentro dos limites da casa. Para fazer isso,
você precisa adicionar a distância em que a fruta cai a partir da árvore para a posição da árvore e, em seguida,
verificar se o resultado está dentro dos limites esquerdo e direito da casa.

    Para resolver este exercício, você deve primeiro ler as entradas e armazená-las em variáveis. Em seguida, você deve usar um laço
para percorrer os conjuntos de distâncias das maçãs e laranjas e adicionar cada distância à posição da respectiva árvore. 
Em seguida, você deve verificar se o resultado está dentro dos limites esquerdo e direito da casa e, se sim, incrementar
a contagem de maçãs ou laranjas, dependendo do caso. No final, você deve exibir as contagens finais de maçãs e laranjas.

*/


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApples = 0;
    let countOranges = 0;

    for (let i = 0; i < apples.length; i++) {
        let distance = a + apples[i];
        if (distance >= s && distance <= t) {
            countApples++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        let distance = b + oranges[i];
        if (distance >= s && distance <= t) {
            countOranges++;
        }
    }

    console.log(countApples);
    console.log(countOranges);
}


console.log("Test case 1");
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);


/* 

Explicação Código - 

Este script define a função countApplesAndOranges(), que recebe seis argumentos: s e t (os limites esquerdo e direito da casa),
a e b (as posições das árvores de maçãs e laranjas, respectivamente),apples e oranges (as distâncias que as maçãs e laranjas caem
a partir de suas respectivas árvores). 

Dentro da função, há duas variáveis ​​de contagem: countApples e countOranges, que são inicializadas com zero. 
Em seguida, há dois laços "for" que percorrem os conjuntos de distâncias das maçãs e laranjas. Dentro de cada laço,
a distância é calculada adicionando a distância da fruta à posição da respectiva árvore. Em seguida, verifica-se se a
distância está dentro dos limites esquerdo e direito da casa e, se sim, a contagem de maçãs ou laranjas é incrementada.
No final, as contagens finais de maçãs e laranjas são exibidas usando o console.log().

*/

console.log('_________________________________________________________________')

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApples1 = 0;
    let countOranges1 = 0;
    const checkFruit = (distance) => distance >= s && distance <= t;

    countApples1 = apples.reduce((acc,distance) => checkFruit(distance + a) ? acc + 1 : acc, 0);
    countOranges1 = oranges.reduce((acc,distance) => checkFruit(distance + b) ? acc + 1 : acc, 0)
    
    console.log(countApples1);
    console.log(countOranges1);
}

console.log("Test case 1");
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

/*

Explicação do Código Refatorado -

    Nessa refatoração eu retirei os laços for e adicionei uma função checkFruit que verifica se a distância calculada esta dentro dos limites
 esquerdo e direito da casa, também adicionei o método reduce em cada array de distâncias, o reduce é usado para percorrer o array e somar o valor.

A ideia é a mesma que o código anterior, mas essa refatoração é mais concisa e eficiente.

*/


/*

Casos de teste para implemetar na sua função e sua explicação - 

console.log("Test case 1");
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

Test case 1:

Limites da casa: s = 7, t = 11
Posições das árvores: a = 5, b = 15
Distâncias das frutas: apples = [-2, 2, 1], oranges = [5, -6]
A primeira maçã cai a uma distância de -2 da árvore, ou seja, 3 da casa (5-2=3), portanto, não cai dentro dos limites da casa.
A segunda maçã cai a uma distância de 2 da árvore, ou seja, 7 da casa (5+2=7), portanto, cai dentro dos limites da casa.
A terceira maçã cai a uma distância de 1 da árvore, ou seja, 6 da casa (5+1=6), portanto, cnao cai dentro dos limites da casa.
A primeira laranja cai a uma distância de 5 da árvore, ou seja, 20 da casa (15+5=20), portanto, não cai dentro dos limites da casa.
A segunda laranja cai a uma distância de -6 da árvore, ou seja, 9 da casa (15-6=9), portanto, cai dentro dos limites da casa.
Portanto, a função deve imprimir 1 e 1.

console.log("Test case 2");
countApplesAndOranges(2, 3, 1, 5, [2], [-1]);

console.log("Test case 3");
countApplesAndOranges(1, 10, 4, 12, [7, -5], [3, 9, -2]);


*/