import { Card } from './../Card'
import { Hand } from './Hand'
import { PlayerInterface, ShowHand } from './PlayerInterface'


export class Player implements PlayerInterface
{

    private name : String

    private hand : Hand

    private score : Number


    constructor(name : String)
    {
        this.name  = name
        this.hand  = new Hand()
        this.score = 0
    }

    get playerName()
    {
        return this.name
    }

    get playerScore()
    {
        return this.score
    }

    set playerName(value : String)
    {
        this.name = value
    }

    set playerScore(value : Number)
    {
        this.score = value
    }

    incrementScore(value : Number)
    {
        this.score = Number(this.score) + Number(value)
    }

    decrementScore(value : Number)
    {
        this.score = Number(this.score) - Number(value)
    }

    setCard(card : Card)
    {
        this.hand.addCard(card)
    }

    setCards(cards : Card[] = [])
    {
        cards.map((card)=> {
            this.setCard(card)
        })
    }

    putMaxCardDown()
    {
        let card = this.hand.maxCard()
        this.hand.dropCard(card)
        return card
    }

    showHand() : ShowHand
    {
        return this.hand.showHand
    }

    hasCards()
    {
        if(this.hand.count() > 0)
        {
            return true
        }
        return false
    }

    dropHand()
    {
        this.hand = new Hand()
    }
}
