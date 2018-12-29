import { Card } from './Card'
import { CardType } from './CardType'


export class Deck
{
    private cards : Card[] = []

    // private types : String[] = ['Hearts', 'Diamonds', 'Spades', 'Clubs']


    constructor()
    {
        this.cards = this.createNewDeck()
    }

    private createNewDeck()
    {
        let cards = []
        for(let i = 1; i <= 14; i++)
        {
            if(i === 11)
            {
                continue
            }

            // for(let j = 0; j < 4; j++)
            // {
            //     let card = new Card(i, this.types[j])
            //     cards.push(card)
            // }

            for(let type in CardType)
            {
                let card = new Card(i, type)
                cards.push(card)
            }
        }
        return cards
    }

    addCard(card : Card)
    {
        this.cards.push(card)
    }

    addCards(cards : [Card])
    {
        cards.map((card)=> {
            this.addCard(card)
        })
    }

    getCard(card : Card)
    {
        return this.cards.filter((item)=> {
            if(card.cardSign === item.cardSign && card.cardValue === item.cardValue)
            {
                return item
            }
        })
    }

    getCards()
    {
        return this.cards
    }

    removeCard(card : Card)
    {
        this.cards.map((item, index)=> {
            if(card.cardSign === item.cardSign && card.cardValue === item.cardValue)
            {
                this.cards.splice(index, 1)
            }
        })
    }

    removeCards(cards : [Card])
    {
        cards.map((card)=> {
            this.removeCard(card)
        })
    }

    removeAllCards()
    {
        this.cards = []
    }

    countCards()
    {
        return this.cards.length
    }

    private generateRandomIndex(min : number, max : number)
    {
        return Math.floor(Math.random() * (max - min) + min)
    }

    getRandomCard()
    {
        return this.cards[this.generateRandomIndex(0, this.cards.length)]
    }

    getRandomCards(count : Number)
    {
        if(count > this.cards.length)
        {
            throw new Error('You requested more cards then the deck holds right now')
        }

        let result = []
        for(let i = 0; i < count; i++)
        {
            let card = this.getRandomCard()
            result.push(card)
            this.removeCard(card)
        }
        return result
    }

    shuffle()
    {
        this.cards = this.getRandomCards(this.cards.length)
    }
}
