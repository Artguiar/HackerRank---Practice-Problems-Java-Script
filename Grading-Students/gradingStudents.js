/* Explicação do exercício 

O desafio de "Grading Students" pede que você implemente uma função que dado um conjunto de notas de estudantes,
devemos arredondar as notas para o próximo múltiplo de 5 se a diferença entre a nota e o próximo múltiplo de 5 for menor ou igual a 3.

Por exemplo, se uma nota é 74, ela seria redondeada para 75, pois a diferença entre 74 e 75 é menor ou igual a 3.
As notas variam de 0 a 100, e notas abaixo de 40 não precisam ser redondas.
A função deve retornar um array com as notas redondas.

*/

function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 40) {
            return grade;
        }
        const nextMultiple = Math.ceil(grade / 5) * 5;
        if (nextMultiple - grade < 3) {
            return nextMultiple;
        }
        return grade;
    });
}

console.log(gradingStudents([73, 67, 38, 33]));

/* Explicação do código - 

A função utiliza o método map para iterar sobre o array de notas e aplicar o arredondamento em cada nota. 
Dentro do método map, é verificado se a nota é menor que 38, caso seja, retornamos o valor da nota sem alteração.
Caso contrário, é calculado o próximo múltiplo de 5 utilizando o método Math.ceil, em seguida verifica se a diferença
entre o próximo múltiplo e a nota é menor ou igual a 3, caso seja, retornamos o a próximo nota arredondada. 
Caso contrário retornamos a nota sem alteração.

*/

console.log('______________________________________________________________________________________________________')

function gradingStudents(grades) {

    return grades.map(grade => {
        
        if( grade < 40) return grade
        const diff = 5 - (grade % 5)
        return diff < 3 ? grade + diff : grade
    })
}

console.log(gradingStudents([73, 67, 38, 33]));
// Output: [75, 67, 40, 33]

/* Explicação do código refatorado - 

Nessa versão, ao invés de calcularmos o próximo múltiplo de 5 utilizando o método Math.ceil,
é calculado a diferença entre 5 e o resto da divisão da nota por 5 (utilizando o operador %)
para encontrar a quantidade necessária para chegar ao próximo múltiplo de 5. 

Caso essa diferença seja menor ou igual a 3, a nota é atualizada adicionando essa diferença,
caso contrário a nota é retornada sem alterações.


*/