/* 
    O desafio "Time Conversion" pede que você converta uma hora no formato 12 horas AM/PM para o formato 24 horas.
    A entrada consiste em uma string no formato "HH:MM:SSAM" ou "HH:MM:SSPM", onde "HH" representa as horas (no formato de 12 horas),
    "MM" representa os minutos e "SS" representa os segundos. A letra "AM" ou "PM" indica se a hora é antes ou depois do meio-dia.
    A saída deve ser uma string no formato "HH:MM:SS".


    Exemplo:

Entrada: "07:05:45PM"
Saída: "19:05:45"
Ou seja, o desafio pede para implementar uma função que recebe uma string no formato 12 horas AM/PM e devolve uma string no formato 24 horas.

*/



function timeConversion(s) {
    let hours = parseInt(s.substring(0, 2));
    let minutes = s.substring(3, 5);
    let seconds = s.substring(6, 8);
    let ampm = s.substring(8, 10);

    if (ampm === "PM" && hours !== 12) {
        hours += 12;
    }
    if (ampm === "AM" && hours === 12) {
        hours = 0;
    }

    let result = hours.toString().padStart(2, "0") + ":" + minutes + ":" + seconds;
    return result;
}
    console.log(timeConversion("07:05:45PM"))
    

/* Explicação do Codigo - 

   A função usa o método substring para dividir a string de entrada em suas partes
   (horas, minutos, segundos e AM/PM) e o método parseInt para converter a string 
   de horas em um número inteiro.

   Depois disso, verifica-se se é PM e se as horas não são 12, se for, adiciona 12 horas, se
   for AM e horas são 12, zera as horas.

   Por fim, usa-se o método toString().padStart(2, "0") para garantir que as horas tenham sempre
   dois dígitos (caso sejam menores que 10) e o método + para concatenar as partes de volta em uma
   única string.

*/


console.log('___________________________________________________')

function timeConversion(s) {
    let [hours, minutes, seconds] = s.slice(0, -2).split(':')
    let ampm = s.slice(-2)

    if(ampm === 'PM' && hours !== '12') {
        hours = (parseInt(hours) + 12).toString()
    }
    
    if(ampm === 'AM' && hours === '12') {
        hours = '00'
    }
    return `${hours.padStart(2, "0")}:${minutes}:${seconds}`;
}
// casos de testes -

let input = "07:05:45AM";
let expectedOutput = "19:05:45";
let result = timeConversion(input);
console.log(result === expectedOutput); // should print true


/* Explicação do Codigo refatorado - 

    Utilizei o método slice para dividir a string de entrada nas partes necessárias. O método slice(0, -2) retorna a string sem as
últimas 2 letras (AM/PM) e o split(':') divide em array as partes.

    Eu também fiz uso do destructuring assignment para atribuir as partes da string para as variáveis correspondentes. 
    Na validação de AM/PM e horas, utilizei apenas um if para validar se é PM e as horas são diferentes de 12, se for,
    adicionamos 12 pois seria após p meio dia, se for AM e horas igual a 12, zeramos as horas.
    E por fim template literals para retornar a string final, e utilizei o método padStart(2, "0") para garantir que as horas
     tenham sempre dois dígitos.
*/