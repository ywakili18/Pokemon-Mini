//-- POKEMON DATA
//Listed below is object containing two pokemon with game data.

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
  healthPoints: 500,
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
  //image associated with mon
}

//start button function
function startGameButton() {
  // selecting id containing start button
  const button = document.getElementById('startButton')

  //function that will alert user that game started when clicked on
  const gameStart = function () {
    alert('Game Start!')
  }
  //event listener
  button.addEventListener('click', gameStart)
}
startGameButton()

//restart game button function
function restartGameButton() {
  // selecting id containing start button
  const button = document.getElementById('restartButton')

  //function that will alert user that game started when clicked on
  const gameRestart = function () {
    alert('New game!')
  }
  //event listener
  button.addEventListener('click', gameRestart)
}
restartGameButton()
