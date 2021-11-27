let player1 = ''
let computer = ''

// creates a iterable array from instead of HTML document and node.
let selectPoke = Array.from(document.getElementsByClassName('btn'))
// create class for pokemon that
class Pokemon {
  constructor(name, hp, type, move) {
    ;(this.name = name), (this.hp = hp), (this.type = type), (this.move = move)
  }
}
// data,hp,moveset for pokemon
const Cyndaquil = new Pokemon('Cyndaquil', 100, 'Fire', 'Ember')
const Totodile = new Pokemon('Totodile', 100, 'Water', 'Water Gun')
const Chikorita = new Pokemon('Chikorita', 100, 'Grass', 'Vine Whip')

// create a array to call each pokemon name from earlier
const names = [Cyndaquil.name, Totodile.name, Chikorita.name]

// create a random selection for comptuer to choose pokemon from array
const randomSelect = Math.floor(Math.random() * names.length)

// Select Pokemon
const pokeSelect = () => {
  selectPoke.map((pokeButton) => {
    pokeButton.addEventListener('click', function (e) {
      switch (e.target.value) {
        case 'Cyndaquil':
          player1 = e.target.value
          computer = names[randomSelect]
          removePoke()
          startGame()
          break
        case 'Totodile':
          player1 = e.target.value
          computer = names[randomSelect]
          removePoke()
          startGame()
          break
        case 'Chikorita':
          player1 = e.target.value
          computer = names[randomSelect]
          removePoke()
          startGame()

          break
        default:
          break
      }
    })
  })
}
pokeSelect()

// remove poke selection after game choice
const removePoke = () => {
  selectPoke.map((poke) => {
    poke.remove()
  })
  document.getElementById('container').style.visibility = 'hidden'
}
// Start game
const startGame = () => {
  let playerId = document.getElementById('player1')
  let computerId = document.getElementById('computer')
  playerId.innerHTML = `Player 1:`
  computerId.innerHTML = `Computer:`
  displayPokeData()
}
// display pokemon data when user selects
const displayPokeData = () => {
  // grabbing current player and computer divs, cloning to replicate once user has chosen pokemon
  const playerDiv = document.getElementById(player1)
  const playerClone = playerDiv.cloneNode(true)

  const compDiv = document.getElementById(computer)
  const compClone = compDiv.cloneNode(true)

  // assign playerHP and compHP values
  playerClone.children[1].id = 'playerHP'
  compClone.children[1].id = 'compHP'

  // creating divs for data and display
  const playerAndCompDiv = document.createElement('div')

  playerAndCompDiv.appendChild(playerClone)
  playerAndCompDiv.appendChild(compClone)
  playerAndCompDiv.id = 'pokeData'

  const displayDiv = document.createElement('div')
  displayDiv.id = 'displayDiv'
  const createH3 = document.createElement('h3')
  createH3.id = 'displayID'
  createH3.innerHTML = 'Game Start!'
  displayDiv.appendChild(createH3)

  const outerDiv = document.createElement('div')
  outerDiv.id = 'gameContainer'
  outerDiv.appendChild(playerAndCompDiv)
  outerDiv.appendChild(displayDiv)
  document.body.appendChild(outerDiv)

  toggleAttack(playerClone, compClone)
}

// show attack buttons when pokemon have been selected
function toggleAttack(playerCloneDiv, compCloneDiv) {
  // creating buttons below
  let playerAttack = document.createElement('button')
  let computerAttack = document.createElement('button')

  // append button move based on playerDiv
  switch (playerCloneDiv.id) {
    case 'Cyndaquil':
      playerAttack.innerHTML = Cyndaquil.move
      playerAttack.id = Cyndaquil.move
      playerCloneDiv.appendChild(playerAttack)
      break
    case 'Totodile':
      playerAttack.innerHTML = Totodile.move
      playerAttack.id = Totodile.move
      playerCloneDiv.appendChild(playerAttack)
      break
    case 'Chikorita':
      playerAttack.innerHTML = Chikorita.move
      playerAttack.id = Chikorita.move
      playerCloneDiv.appendChild(playerAttack)
      break
    default:
      break
  }
  // append button move based on computerDiv
  switch (compCloneDiv.id) {
    case 'Cyndaquil':
      computerAttack.innerHTML = Cyndaquil.move
      computerAttack.id = Cyndaquil.move
      compCloneDiv.appendChild(computerAttack)
      break
    case 'Totodile':
      computerAttack.innerHTML = Totodile.move
      computerAttack.id = Totodile.move
      compCloneDiv.appendChild(computerAttack)
      break
    case 'Chikorita':
      computerAttack.innerHTML = Chikorita.move
      computerAttack.id = Chikorita.move
      compCloneDiv.appendChild(computerAttack)
      break
    default:
      break
  }
  // Battle
  function battle(pButton) {
    let playerHP = document.getElementById('playerHP')
    let computerHP = document.getElementById('compHP')
    let startingHP = 500
    let displayId = document.getElementById('displayID')

    playerHP.value = startingHP
    computerHP.value = startingHP

    let pFinalHP = playerHP.value
    let cFinalHP = computerHP.value

    // event listner for damage
    document.getElementById(pButton.id).addEventListener('click', function () {
      let randomValue1 = Math.floor(Math.random() * 50)
      let randomValue2 = Math.floor(Math.random() * 50)

      setTimeout(() => {
        cFinalHP = cFinalHP - randomValue1
        computerHP.innerHTML = `HP: ${cFinalHP}`

        pFinalHP = pFinalHP - randomValue2
        playerHP.innerHTML = `HP: ${pFinalHP}`
        displayId.innerHTML = `${playerCloneDiv.id} did ${randomValue1} damage to ${compCloneDiv.id}! 
        & ${compCloneDiv.id} did ${randomValue2} damage to ${playerCloneDiv.id}!`
      }, 500)
    })
  }

  battle(playerAttack, computerAttack)
}

const checkWinner = (playerHP, computerHP) => {
  console.log(playerHP, computerHP)

  if (playerHP <= 0) {
    console.log('WINNER!')
  }
  if (computerHP <= 0) {
    console.log('COMP WINNSNS')
  }
}

// restart game button
function restartGame() {
  window.location.reload(false)
}
