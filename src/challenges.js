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

  if ((Math.abs(rato - gato1)) < (Math.abs(rato - gato2))){
    return 'cat1';
  } else if ((Math.abs(rato - gato1)) === (Math.abs(rato - gato2))){
    return 'os gatos trombam e o rato foge';
  } else{
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let retorno = []

  for (let index = 0; index < array.length; index++) {
    if ((array[index] % 3 === 0) && ((array[index] % 5 === 0)) ){
      retorno.push("fizzBuzz");
    } else if (array[index] % 3 === 0) {
      retorno.push("fizz");
    } else if (array[index] % 5 === 0) {
      retorno.push("buzz")
    } else {
      retorno.push("bug!")
    }
  }
  return retorno
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
