//GLOBAL VARIABLES
let playerTurn = null
let playerOne = null
let playerTwo = null
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
    healthPoints: 500,
    moveSet: 'Fire Blast'
  }
}
// selecting id containing start button
const startButton = document.getElementById('startButton')
//function that will prompt user to make game choice
const gameStart = function () {
  //selecting pTag containing pokemon
  let buttonP = document.getElementById('startP')
  buttonP.innerText = 'Game Start! Player 1: Pick your pokemon below.'
  // event listener to show pokemon choices
  const selectTyph = document.getElementById('typh')
  selectTyph.classList.remove('hiddenPoke')
  const selectChar = document.getElementById('char')
  selectChar.classList.remove('hiddenPoke')
}
startButton.addEventListener('click', gameStart)

// FUNCTION THAT TAKES CHOICE THAT USER PICKS AND DISPLAYS INFORMATION RELATED TO POKEMON CHOICE
function pokeChoice(element, pokeName) {
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

    //Selecting ID based upon what user Pokemon clicks first
    const pokemonID = document.getElementById(`${pokemon}Message`)

    if (pokeName !== pokemon) {
      //SELECTING OBJECT, ADDING TEXT TO WHAT PLAYER CHOOSES BASED ON PLAYER OPTION.
      //WILL ASSIGN OPPOSITE POKEMON ONCE USER HAS SELECTED
      playersChoice.player2 = poke
      pokemonID.innerHTML = `Player 2 chooses: ${pokemon}`
      playerTwo = pokemon
    } else {
      playersChoice.player1 = poke
      pokemonID.innerHTML = `Player 1 chooses: ${pokemon}`
      playerOne = pokemon
      console.log(playerOne)
    }
  }
}
//battle sequence below
const selectFlameP = document.getElementById('FlameThrower')
selectFlameP.addEventListener('click', () => {
  if (playerTurn === true && playerOne === 'Charizard') {
    return
  } else {
    pokemonAttacks('Charizard')
    playerTurn = false
  }
})
const selectfireBlastP = document.getElementById('fireBlast')
selectfireBlastP.addEventListener('click', () => {
  if (playerTurn === true && playerOne === 'Typhlosion') {
    return
  } else {
    pokemonAttacks('Typhlosion')
    playerTurn = false
  }
})

function pokemonAttacks(victim, damage = 100) {
  pokemonObject[victim].healthPoints -= damage
  const hpTag = document.getElementById(`hp-${victim}`)
  hpTag.innerText = `HP: ${pokemonObject[victim].healthPoints}`
  checkLoser(victim)
}

function checkLoser(victim) {
  const gameOverTag = document.getElementById('gameOverMessage')
  if (pokemonObject[victim].healthPoints <= 0) {
    gameOverTag.innerText = `${victim} loses`
  }
}
