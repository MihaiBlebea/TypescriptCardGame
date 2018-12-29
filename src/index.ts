import { Card } from './Card'
import { Deck } from './Deck'
import { Player } from './Player'
import { Game } from './Game'

export namespace CardGame
{
    export const card = (value : Number, sign : String)=> {
        return new Card(value, sign)
    }

    export const deck = ()=> {
        return new Deck()
    }

    export const player = (name : String)=> {
        return new Player(name)
    }

    export const game = (deck : Deck)=> {
        return new Game(deck)
    }
}
