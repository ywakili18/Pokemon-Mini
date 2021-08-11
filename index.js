//GLOBAL VARIABLES
let turn = null
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
    moveSet: 'Flamethrower'
  },
  Charizard: {
    healthPoints: 510,
    moveSet: 'Fire Blast'
  }
}
// selecting id containing start button
const startButton = document.getElementById('startButton')
//function that will prompt user to make game choice
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
function pokeChoice(element, pokeName, move) {
  if (playersChoice.player1) {
    return //stops function after assigning player1 to pokemon
  }
  //FOR LOOP FOR POKEMON ARRAY LISTED EARLIER TO ASSIGN OPPOSITE POKEMON TO PLAYER 2
  for (let i = 0; i < pokemons.length; i++) {
    //select pokemons array global variable
    const pokemon = pokemons[i]
    //selecting pokemon name from pokemonObject
    const poke = pokemonObject[pokemon]
    //Assigning HP to poke value
    let enemyPokeHP = poke.healthPoints
    let playerPokeHP = poke.healthPoints
    //Assigning Move to Poke value
    let playerPokeMove = poke.moveSet
    let enemyPokeMove = poke.moveSet
    //Selecting ID based upon what user Pokemon clicks first
    const pokemonID = document.getElementById(`${pokemon}ID`)
    //if conditional to store player1/player2 value depending on
    //what player 1 picks first. Will display Pokemon name and HP
    if (pokeName !== pokemon) {
      //SELECTING OBJECT, ADDING TEXT TO WHAT PLAYER CHOOSES BASED ON PLAYER OPTION. WILL ASSIGN OPPOSITE POKEMON ONCE USER HAS SELECTED
      playersChoice.player2 = poke
      pokemonID.innerText = `Player 2 chooses: ${pokemon} 
        HP: ${enemyPokeHP}`
    } else {
      //SELECTING OBJECT, ADDING TEXT TO WHAT PLAYER CHOOSES BASED ON PLAYER OPTION. WILL ASSIGN OPPOSITE POKEMON ONCE USER HAS SELECTED
      playersChoice.player1 = poke
      pokemonID.innerText = `Player 1 chooses: ${pokemon}
        HP: ${playerPokeHP}`
      turn = 1
    }
    while (turn === 1) {
      console.log(playerPokeMove)
      return
    }
  }
}
