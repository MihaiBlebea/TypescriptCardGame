### Usage

Read the instructions to use this library

#### Module API

1. Game

- import / require the library from the module:
```
const { CardGame } = require('./lib')
```

- create the players for the game:
```
let playerOne = CardGame.player('Jim')
let playerTwo = CardGame.player('Bob')
```

- create the game and the card deck for the game:
```
let deck = CardGame.deck()
let game = CardGame.game(deck)
```

- Add the players to the game:
```
game.addPlayer(playerOne)
game.addPlayer(playerTwo)
```

- Run the next rounds of the game, 20 rounds for this example:
```
let result = game.start()
console.log(result)
```

2. Card API

- init the card providing the value and sign of the card:
```
import { Card } from 'library'

let card = new Card(4, 'Hearts')
```

- get and set the card value and sign
```
card.cardValue = 12
console.log(card.cardValue)

card.cardSign = 'Clubs'
console.log(card.cardSign)
```

- compare two cards with each other:
```
import { Card } from 'library'

let cardOne = new Card(1, 'Hearts')
let cardTwo = new Card(2, 'clubs')

cardOne.isGreater(cardTwo) /// return false
cardOne.isLess(cardTwo) /// return true
cardOne.isEqual(cardTwo) /// return false

cardOne.isGreaterOrEqual(cardTwo) /// return false
cardOne.isLessOrEqual(cardTwo) /// return false

cardOne.isCard(cardTwo) /// return false
```
