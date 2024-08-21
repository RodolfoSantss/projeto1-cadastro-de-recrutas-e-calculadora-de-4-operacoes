const number1 = window.prompt('Digite um valor.')
const number2 = window.prompt('Digite outro valor.')

let soma =parseInt(number1)+parseInt(number2);
let subtracao =parseInt(number1)-parseInt(number2);
let multiplicacao =parseInt(number1)*parseInt(number2);
let divisao =parseInt(number1)/parseInt(number2);

alert(`Exemplo de números ${number1} e ${number2}`)

alert(`Resultado
${number1} + ${number2} = ${soma}
${number1} - ${number2} = ${subtracao}
${number1} * ${number2} = ${multiplicacao}
${number1} / ${number2} = ${divisao}`)