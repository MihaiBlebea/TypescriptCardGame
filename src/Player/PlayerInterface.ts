import { Card } from './../Card'


export type ShowHand = { value : Number, sign : String }[] | []


export interface PlayerInterface
{
    incrementScore(value : Number) : void

    decrementScore(value : Number) : void

    setCard(card : Card) : void

    setCards(cards : Card[]) : void

    putMaxCardDown() : Card

    showHand() : ShowHand

    hasCards() : Boolean

    dropHand() : void
}
