//-- POKEMON DATA
//--TYPHLOSION
const typhlosion = {
  name: 'Typhlosion',
  healthPoints: 500,
  //nested array with object containing both Pokemon move name and damage data.
  moveSet: [
    //Flamethrower data
    {
      name: 'Flamethrower',
      power: 80
    },
    //Eruption data
    {
      name: 'Eruption',
      power: 100
    }
  ]
}
//--CHARIZARD
const charizard = {
  name: 'charizard',
  healthPoints: 510,
  //Array containing object with Pokemon move name and damage data.
  moveSet: [
    {
      name: 'Dragon Claw',
      power: 80
    },
    {
      name: 'Blast Burn',
      power: 100
    }
  ]
}
function startGameButton() {
  // selecting id containing start button
  const button = document.getElementById('startButton')

  //function that will promt user to make game choice
  const gameStart = function () {
    let buttonP = document.getElementById('startP')
    buttonP.innerText = 'Game Start! Player 1: Pick your pokemon below'
  }
  //event listener
  const button1 = button.addEventListener('click', gameStart)
  turn = 1
}
startGameButton()

//function containing event listner that will display HP value when user selects pokemon
function choosePokemon1() {
  const button = document.getElementById('typhButton')
  function typhP() {
    let p = document.getElementById('displayHP1')
    p.innerText = `HP: ${typhlosion.healthPoints}`
  }
  button.addEventListener('click', typhP)
}
choosePokemon1()
function choosePokemon2() {
  const button = document.getElementById('charButton')
  function charP() {
    let p = document.getElementById('displayHP2')
    p.innerText = `HP: ${charizard.healthPoints}`
  }
  button.addEventListener('click', charP)
}
choosePokemon2()
