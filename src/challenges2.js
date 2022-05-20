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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
