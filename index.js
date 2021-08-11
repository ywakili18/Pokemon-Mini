//GLOBAL VARIABLES
let playerOneTurn = 1
const pokemons = ['Typhlosion', 'Charizard']
const moveSet1 = ['Flamethrower', 'Eruption', 'Dragon Claw', 'Blast Burn']
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
      Flamethrower: 80,
      Eruption: 100
    }
  },
  Charizard: {
    healthPoints: 500,
    //Array containing object with Pokemon move name and damage data.
    moveSet: {
      'Dragon Claw': 80,
      'Blast Burn': 100
    }
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

    //if conditional to store player1/player2 value depending on
    //what player 1 picks first. Will display Pokemon name and HP

    //Selecting ID based upon what user Pokemon clicks first
    const pokemonID = document.getElementById(`${pokemon}ID`)
    //Selecting ID containing hitpoints p tag
    const hitPoints = document.getElementById('hitPoints')
    //Selecting flamethrower ID containing move
    const selectFlameP = document.getElementById('Flamethrower')
    //Selecting fire fang ID containing move
    const selectfireFang = document.getElementById('Fire Fang')
    //Variable containing HP value based on user choice
    let pokeHP = 500
    let enemyHP = 500
    if (pokeName !== pokemon) {
      //SELECTING OBJECT, ADDING TEXT TO WHAT PLAYER CHOOSES BASED ON PLAYER OPTION. WILL ASSIGN OPPOSITE POKEMON ONCE USER HAS SELECTED
      playersChoice.player2 = poke
      pokemonID.innerText = `Player 2 chooses: ${pokemon}`
      let describeHP = (hitPoints.innerText = `HP: ${enemyHP}`)

      //SELECTING POKEMON MOVE NAME AND ADDING TEXT DESCRIBING ACTION
      const flameThrower = function () {
        selectFlameP.innerText = `You chose Flamethrower!`
        describeHP = hitPoints.innerText = `HP: ${pokeHP - 80}`
      }
      selectFlameP.addEventListener('click', flameThrower)
    } else {
      //SELECTING OBJECT, ADDING TEXT TO WHAT PLAYER CHOOSES BASED ON PLAYER OPTION. WILL ASSIGN OPPOSITE POKEMON ONCE USER HAS SELECTED
      playersChoice.player1 = poke
      pokemonID.innerText = `Player 1 chooses: ${pokemon}`
      let describeHP = (hitPoints.innerText = `HP: ${pokeHP}`)

      //SELECTING POKEMON MOVE NAME AND ADDING TEXT DESCRIBING ACTION
      const fireFang = function () {
        selectfireFang.innerText = `You chose Fire Fang!`
        describeHP = hitPoints.innerText = `HP: ${enemyHP - 80}`
      }
      selectfireFang.addEventListener('click', fireFang)
    }
  }
}
