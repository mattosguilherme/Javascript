// exemplos de operacoes



function calculadora(a, b, operacao) {
    switch (operacao) {

        case 'soma':
            return a + b;

        case 'subtracao':
            return a - b;
        case 'multiplicacao':

            return a * b;
        case 'divisao':
            if (b === 0) {
                return 'Erro: Divisão por zero';
            }
            return a / b;
        default:
            return 'Operação inválida';
    }
}

// Exemplos de calculo

console.log(calculadora(25, 20, 'soma')); 
console.log(calculadora(95, 35, 'subtracao')); 
console.log(calculadora(10, 5, 'multiplicacao')); 
console.log(calculadora(5, 0, 'divisao')); 
console.log(calculadora(75, 5, 'divisao')); 
console.log(calculadora(10, 5, "modulo")); 
