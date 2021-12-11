![Pokemon-Gold-Mini picture](./images/screenshot.png)

# 🌟Pokemon Gold Mini 🌟

## Yousof Wakili

## [**Live**](http://pokemongoldmini.surge.sh/) **|** [**Say Hi to me on LinkedIn!**](https://www.linkedin.com/in/youseffect/) **|** [**Portfolio**](https://youseffect.com/)

## Description🗒

---

#### An ode to a personal favorite game of mines, Pokemon Gold for the Gameboy Color. Pick between the three johto starters and battle to see who is the winner!

## Purpose of building this project 🤔

---

To build a javascript game manipulating the DOM (Document Object Model), event listeners, work with classes, objects, arrays, for manipulating the data through the flow of the game. Wanted to also work with array methods and finding ways to make the game run effciently.

Example of working with OOP principles

```
// Pokemon class
class Pokemon {
  constructor(name, hp, type, move) {
    ;(this.name = name), (this.hp = hp), (this.type = type), (this.move = move)
  }
}

// data,hp,moveset for pokemon
const Cyndaquil = new Pokemon('Cyndaquil', 100, 'Fire', 'Ember')
const Totodile = new Pokemon('Totodile', 100, 'Water', 'Water Gun')
const Chikorita = new Pokemon('Chikorita', 100, 'Grass', 'Vine Whip')
```

Event listener user selecting a pokemon

```
const pokeSelect = () => {
  selectPoke.map((pokeButton) => {
    pokeButton.addEventListener('click', function (e) {
      computer = names[randomSelect]
      switch (e.target.value) {
        case 'Cyndaquil':
          player1 = e.target.value
          break
        case 'Totodile':
          player1 = e.target.value
          break
        case 'Chikorita':
          player1 = e.target.value
          break
        default:
          break
      }
      removePoke()
      startGame()
    })
  })
}
pokeSelect()
```

Although most of the program takes uses mostly functional programming as its paradigm, I found that storing the pokemon data in objects were useful during each function call.

Future versions will include a type effective damage multiplier.

## 🌟Technologies🌟

---

![Page 1](./images/html.jpeg)

- HTML5
- CSS3
- JavaScript

---

**MVP**

- [x] 3 starter pokemon
- [x] OOP principles (pokemon class, object to hold data)
- [x] Utlize flexbox or grid
- [x] Event listener
- [x] Add game logic, include sprites
- [x] Check winner function
- [x] Deploy on surge
- [x] CSS

---

## **Getting Started** ✅

To create a game like this will require the following:

1. Creating three pokemon (and too add any new pokemon in future) utilizing OOP basics (Classes and objects)
2. Both Pokemon having unique moves (having random damage points associated)
3. Pokemon having unique attributes (Name, image of pokemon, Hit Points/ Health Points, type(i.e fire/water/electric etc))
4. Adding game start/restart button, Choosing between which pokemon & what move user wants to pick.
5. Checking for winner

---

## **Game Logic** 🤔

1. Utilizing objects/classes, can **currently** unique Pokemon containing data about each one.
2. Adding if/else conditional to check for winner/starting game/restarting game. This will also be the case for when user chooses to attack and each attack will take away from current HP and display current HP points based upon last attack.
3. Event listeners will be utilized to pick between Each pokemon, move, and game start.
4. Different functions will be created for each different game logic (gamestart, checking winner)
5. May utilize an array to contain both moves.
6. After game logic is finished, then will include CSS styling (using grid) and adding any HTML structuring.

**_Trello Board listed for planning_**

#### [Trello Board](https://trello.com/b/7Ojd8AR1/pokemon-mini)

**_Future Plans_**

- [ ] Add more pokemon to choose from
- [ ] Include more then one move(include status moves)
- [ ] Type chart
      **_Credits_**

[Font Used : "Press Start 2P" by CodeMan38](https://fonts.google.com/specimen/Press+Start+2P)
