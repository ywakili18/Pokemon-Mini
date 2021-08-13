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
const pokemonObjects = {
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
function pokeChoice(element, chosenPoke) {
  if (playersChoice.player1) {
    return //stops function after assigning player1 to pokemon
  }
  //FOR LOOP FOR POKEMON ARRAY LISTED EARLIER TO ASSIGN OPPOSITE POKEMON TO PLAYER 2
  for (let i = 0; i < pokemons.length; i++) {
    //select pokemons array global variable
    const pokemonName = pokemons[i]
    //selecting pokemon name from pokemonObjects
    const pokemon = pokemonObjects[pokemonName]

    //Assigning HP to poke value
    let enemyPokeHP = pokemon.healthPoints
    let playerPokeHP = pokemon.healthPoints

    //Selecting ID based upon what user Pokemon clicks first
    const pokemonID = document.getElementById(`${pokemonName}Message`)

    if (chosenPoke !== pokemonName) {
      //SELECTING OBJECT, ADDING TEXT TO WHAT PLAYER CHOOSES BASED ON PLAYER OPTION.
      //WILL ASSIGN OPPOSITE POKEMON ONCE USER HAS SELECTED
      playersChoice.player2 = pokemon
      pokemonID.innerHTML = `Player 2 chooses: ${pokemonName}`
      playerTwo = pokemonName
    } else {
      playersChoice.player1 = pokemon
      pokemonID.innerHTML = `Player 1 chooses: ${pokemonName}`
      playerOne = pokemonName
    }
  }
  playerTurn = playerOne
}
//battle sequence below
//Typhlosion flamethrower event listener
const selectFlameP = document.getElementById('FlameThrower')
selectFlameP.addEventListener('click', () => {
  if (playerTurn === 'Typhlosion') {
    pokemonAttacks('Charizard')
    playerTurn = 'Charizard'
  }
})
//charizard flamethrower event listener
const selectfireBlastP = document.getElementById('fireBlast')
selectfireBlastP.addEventListener('click', () => {
  if (playerTurn === 'Charizard') {
    pokemonAttacks('Typhlosion')
    playerTurn = 'Typhlosion'
  }
})

function pokemonAttacks(victim, damage = Math.floor(Math.random() * 100) + 50) {
  pokemonObjects[victim].healthPoints -= damage
  const hpTag = document.getElementById(`hp-${victim}`)
  hpTag.innerText = `HP: ${pokemonObjects[victim].healthPoints}`
  checkLoser(victim)
}

function checkLoser(victim) {
  const gameOverTag = document.getElementById('gameOverMessage')
  if (pokemonObjects[victim].healthPoints <= 0) {
    gameOverTag.innerText = `${victim} loses`
    //will stop event listener once solution is found
    document.addEventListener('click', handler, true)

    function handler(e) {
      e.stopPropagation()
      e.preventDefault()
    }
  }
}
