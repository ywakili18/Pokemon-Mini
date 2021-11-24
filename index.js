let player1 = ''
let computer = ''

class Pokemon {
  constructor(name, hp, type, move) {
    ;(this.name = name), (this.hp = hp), (this.type = type), (this.move = move)
  }
}
const Cyndaquil = new Pokemon('Cyndaquil', 100, 'Fire', 'Ember')
const Totodile = new Pokemon('Totodile', 100, 'Water', 'Water Gun')
const Chikorita = new Pokemon('Chikorita', 100, 'Grass', 'Vine Whip')

const names = [Cyndaquil.name, Totodile.name, Chikorita.name]
const randomSelect = Math.floor(Math.random() * names.length)

let selectPoke = Array.from(document.getElementsByClassName('btn'))

const pokeSelect = () => {
  selectPoke.map((pokeButton) => {
    pokeButton.addEventListener(
      'click',
      function (e) {
        switch (e.target.value) {
          case 'Cyndaquil':
            player1 = e.target.value
            computer = names[randomSelect]
            console.log(player1, computer)
            removePoke()
            break
          case 'Totodile':
            player1 = e.target.value
            computer = names[randomSelect]
            console.log(player1, computer)
            break
          case 'Chikorita':
            player1 = e.target.value
            computer = names[randomSelect]
            console.log(player1, computer)
            break
          default:
            break
        }
      },
      { once: true }
    )
  })
}
pokeSelect()
// remove poke selection after game choice
const removePoke = () => {
  selectPoke.map((poke) => {
    poke.remove()
  })
}
