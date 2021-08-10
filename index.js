let turn = false
//-- POKEMON DATA
//--TYPHLOSION
const typhlosion = {
  name: 'Typhlosion',
  healthPoints: 500,
  //nested array with object containing both Pokemon move name and damage data.
  moveSet: {
    flamethrower: 80,
    eruption: 100
  }
}
//--CHARIZARD
const charizard = {
  name: 'charizard',
  healthPoints: 510,
  //Array containing object with Pokemon move name and damage data.
  moveSet: {
    'Dragon Claw': 80,
    'Blast Burn': 100
  }
}

// selecting id containing start button
const startButton = document.getElementById('startButton')
//function that will promt user to make game choice
const gameStart = function () {
  let buttonP = document.getElementById('startP')
  buttonP.innerText = 'Game Start! Player 1: Pick your pokemon below'
  const selectTyph = document.getElementById('typh')
  selectTyph.classList.remove('hiddenPoke')
  const selectChar = document.getElementById('char')
  selectChar.classList.remove('hiddenPoke')
}
//event listener
startButton.addEventListener('click', gameStart)

//function containing event listner that will display HP value when user selects pokemon
//typhlosion
function pokeChoice(element, move, poke) {
  element.innerText = `You choose ${poke.name} 
  HP: ${poke.healthPoints}`

  // const selectTyphDiv = document.getElementById('typh')
  // const showTyphHP = function () {
  //   let typhClick = document.getElementById('displayHP1')
  // }
  // const x = selectTyphDiv.addEventListener('click', showTyphHP)
}
pokeChoice()

//make poke choices above to disappear
