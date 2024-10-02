// pergunta a idade 

let idade = prompt(" Digite sua idade:");

// verifica a idade 

if (idade >=18) {
    console.log("você é maior de idade.");
} else {
    console.log("você é menor de idade.");
}


// par ou impar 

let ParouImpar = prompt(" insira um numero:");


function verificaParouImpar(numero) {
    if (numero % 2 === 0) {
          return "Par";
       } else {
          return "Impar";
       }
    }

let resultado = verificaParouImpar(567);
console.log(resultado);


// solicita ao usuario para inserir um numero 

let numero = parseFloat(prompt("Digite um numero:") );

// verifica se é positivo, negativo ou zero 

if (numero > 0) {
    console.log("Numero positivo");
} else if (numero < 0) {
    console.log("Numero negativo");
} else {
    console.log("Zero");
}













