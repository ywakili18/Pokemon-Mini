//GLOBAL VARIABLES
let playerOneTurn = true
const pokemons = ['Typhlosion', 'Charizard']
//OBJECT STORING PLAYER CHOICE
playersChoice = {
  player1: null,
  player2: null
}
//-- POKEMON DATA
//--TYPHLOSION and CHARIZARD OBJECT DATA
const pokemonObject = {
  Typhlosion: {
    healthPoints: 500,
    //nested array with object containing both Pokemon move name and damage data.
    moveSet: {
      flamethrower: 80,
      eruption: 100
    }
  },
  Charizard: {
    healthPoints: 510,
    //Array containing object with Pokemon move name and damage data.
    moveSet: {
      'Dragon Claw': 80,
      'Blast Burn': 100
    }
  }
}

// selecting id containing start button
const startButton = document.getElementById('startButton')
//function that will promt user to make game choice
const gameStart = function () {
  //selecting pTag containing pokemon
  let buttonP = document.getElementById('startP')
  buttonP.innerText = 'Game Start! Player 1: Pick your pokemon below'
  // event listener to show pokemon choices
  const selectTyph = document.getElementById('typh')
  selectTyph.classList.remove('hiddenPoke')
  const selectChar = document.getElementById('char')
  selectChar.classList.remove('hiddenPoke')
}
//event listener
startButton.addEventListener('click', gameStart)

// FUNCTION THAT TAKES CHOICE THAT USER PICKS AND DISPLAYS INFORMATION RELATED TO POKEMON CHOICE
function pokeChoice(element, move, pokeName) {
  // ASSIGNED POKE TO POKEMON OBJECT LISTED EARLIER,
  // SELECTING POKEMON NAME AND DISPLAYING NAME + HEALTH POINTS
  const poke = pokemonObject[pokeName]

  //FOR LOOP FOR POKEMON ARRAY LISTED EARLIER TO ASSIGN OPPOSITE POKEMON TO PLAYER 2
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i]
    const pokemonID = document.getElementById(`${pokemon}ID`)
    if (pokeName !== pokemon) {
      playersChoice.player2 = pokemonObject[pokemon]
      pokemonID.innerText = `Player 2 chooses: ${pokemon}`
    } else {
      playersChoice.player1 = poke
      pokemonID.innerText = `Player 1 chooses: ${pokemon}`
    }
  }
}
//FUNCTION TO START BATTLE SEQUENCE
const gameSequence = () => {}
