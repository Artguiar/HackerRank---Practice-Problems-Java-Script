/*

Explicação do exercício - 

    O desafio "Cats and a Mouse" consiste em determinar qual animal (gato A, gato B ou rato C) alcançará primeiro uma determinada posição. 
Você é dado as posições iniciais dos três animais (A, B e C) e a posição do objetivo (quadrado).
Você deve calcular a distância entre cada animal e o objetivo e determinar qual animal alcançará o objetivo primeiro.

Se a distância entre o gato A e o objetivo for igual à distância entre o gato B e o objetivo, o rato C é o vencedor.
Se a distância entre o gato A e o objetivo for menor do que a distância entre o gato B e o objetivo, o gato A é o vencedor.
Se a distância entre o gato A e o objetivo for maior do que a distância entre o gato B e o objetivo, o gato B é o vencedor.

*/



// Codigo do Exercício - 

function catAndMouse(x, y, z, qx, qy) {
    let distGatoA = Math.abs(qx - x) + Math.abs(qy - y)
    let distgatoB = Math.abs(qx -z) + Math.abs(qy - qy)

    if(distGatoA < distgatoB) {
        return 'Cat A' 
    } else if( distGatoA > distgatoB) {
        return 'Cat B'
    } else {
        return 'Mouse C'
    }
}

console.log(catAndMouse(1, 2, 3, 5, 2, 8)); 


//Código refatorado

function catAndMouse(x, y, z) {
    return (Math.abs(x-z) === Math.abs(y-z) ? "Mouse C" : Math.abs(z-y) > Math.abs(z-x) ? "Cat A" : "Cat B")
    }

console.log(catAndMouse([1, 2], [3, 5], [2, 8]));