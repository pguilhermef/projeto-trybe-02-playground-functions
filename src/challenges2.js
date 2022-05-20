// Desafio 11
function generatePhoneNumber() {
//
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
  
  let regular = /\d+/g;
  let resultado = frase.match(regular)
  let soma = 1

  for (let index = 0; index < resultado.length; index++) {
    soma += resultado[index]     
  }

  let fraseFinal = (soma + " copo de água")

  return fraseFinal

}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
