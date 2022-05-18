// Desafio 1
function compareTrue(x, y) {
  if (x && y === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let triangulo = (base*altura)/2;
  return triangulo;
}

// Desafio 3
function splitSentence(frase) {
  let fraseRecortada = frase.split(" ");
  return fraseRecortada;
}

// Desafio 4
function concatName(array) {
  let primeiroItem = array.splice(0, 1);
  let ultimoItem = array.splice(-1, 1);
  let retorno = ultimoItem + ", " + primeiroItem;
  return retorno;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = 3;
  let empates = 1;
  let pontuação = (wins * vitorias)+(ties * empates);
  return pontuação;
}

// Desafio 6
function highestCount(array) {
  let repetições = 0
  let maiorNumero = -100000
  
  for (index = 0; index < array.length; index ++){
    if (array[index] > maiorNumero){
      maiorNumero = array[index];
    }
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] === maiorNumero){
      repetições = repetições + 1;
    }
    
  }
  return repetições
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  rato = mouse
  gato1 = cat1
  gato2 = cat2

  if ()

}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
