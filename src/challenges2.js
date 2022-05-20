// Desafio 11
function generatePhoneNumber() {

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
