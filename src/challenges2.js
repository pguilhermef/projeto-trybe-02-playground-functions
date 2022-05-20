// Desafio 11
function generatePhoneNumber(array) {

  if (array.length !== 11){
    return 'Array com tamanho incorreto.'
  }

  for (let index = 0; index < array.length; index++) {
    let verificador = array[index]
    let contador = 0;

    for (let index2 = 0; index2 < array.length; index2++) {
      if (array[index2] === verificador){
        contador += 1
      } 
    }

    if (array[index] < 0 || array[index] > 9 || contador > 2){
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }

  let resultado = array.join('').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

  return resultado
}



// Desafio 12
function triangleCheck(line1, line2, line3) {
  let catetoA = line1
  let catetoB = line2
  let catetoC = line3
  let possibilidade = false

  if ((catetoA < (catetoB + catetoC)) && (catetoB < (catetoA + catetoC)) && (catetoC < (catetoA + catetoB))){
    possibilidade = true
  }
  return possibilidade
}

// Desafio 13
function hydrate(frase) {
  
  let regular = frase.replace(/[^0-9]/g, '');
  let array = regular.split('')
  let numeros = array.map((number) => parseInt(number, 10))
  let soma = 0

  for (let numero of numeros){
    if (numero < 1 || numero > 9){
      return '0 copos de água'
    }
    soma += numero
  }

  if (soma > 1){
    return soma + ' copos de água'
  } else {
    return soma + ' copo de água'
  }

}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
