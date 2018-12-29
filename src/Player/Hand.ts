import { Card } from './../Card'


export class Hand
{
    private cards : Card[] = []


    constructor()
    {
        this.cards = []
    }

    get showHand()
    {
        return this.cards.map((card)=> {
            return {
                value: card.cardValue,
                sign: card.cardSign
            }
        })
    }

    addCard(card : Card)
    {
        this.cards.push(card)
    }

    count()
    {
        return this.cards.length
    }

    maxCard()
    {
        let result : Card = this.cards[0]
        this.cards.forEach((card, index)=> {
            if(index > 0 && result.cardValue < card.cardValue)
            {
                result = card
            }
        })
        return result
    }

    minCard()
    {
        let result : Card = this.cards[0]
        this.cards.forEach((card, index)=> {
            if(index > 0 && result.cardValue > card.cardValue)
            {
                result = card
            }
        })
        return result
    }

    private generateRandomIndex(min : number, max : number)
    {
        return Math.floor(Math.random() * (max - min) + min)
    }

    randomCard()
    {
        return this.cards[this.generateRandomIndex(0, this.cards.length)]
    }

    dropCard(card : Card)
    {
        this.cards.map((item, index)=> {
            if(card.cardSign === item.cardSign && card.cardValue === item.cardValue)
            {
                this.cards.splice(index, 1)
            }
        })
    }
}
