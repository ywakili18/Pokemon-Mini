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
//Created OnClick function in HTML to when user selects pokemon, will display HP value
let displayTyphHp = () => {
  let newP = document.createElement('p')
  let addnewP = document.getElementById('displayHP1').appendChild(newP)
  return (addnewP.innerText = `${typhlosion.healthPoints}`)
}
let displayCharHp = () => {
  let newP = document.createElement('p')
  let addnewP = document.getElementById('displayHP2').appendChild(newP)
  return (addnewP.innerText = `${charizard.healthPoints}`)
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
