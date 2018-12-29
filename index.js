const { CardGame } = require('./lib')

let mihai = CardGame.player('Mihai')
let cristina = CardGame.player('Cristina')

let deck = CardGame.deck()
let game = CardGame.game(deck)

game.addPlayer(mihai)
game.addPlayer(cristina)

let result = game.start()
console.log(result)
