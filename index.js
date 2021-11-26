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
// create a random selection for comptuer to choose pokemon from array
const names = [Cyndaquil.name, Totodile.name, Chikorita.name]
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
  const playerDiv = document.getElementById(player1)
  const playerClone = playerDiv.cloneNode(true)

  const compDiv = document.getElementById(computer)
  const compClone = compDiv.cloneNode(true)

  const playerAndCompDiv = document.createElement('div')
  playerAndCompDiv.appendChild(playerClone)
  playerAndCompDiv.appendChild(compClone)
  playerAndCompDiv.id = 'someId'
  document.body.appendChild(playerAndCompDiv)
}
// restart game button
function restartGame() {
  window.location.reload(false)
}
