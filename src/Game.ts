import { Player } from './Player'
import { Deck } from './Deck'
import { Card } from './Card'
import { GameInterface } from './GameInterface'


export class Game implements GameInterface
{
    private players : Player[] = []

    private deck : Deck

    private round : Number

    private gameOver : Boolean


    constructor(deck : Deck)
    {
        this.deck     = deck
        this.round    = 0
        this.gameOver = false
    }

    start()
    {
        this.firstRound()
        while(this.gameOver === false)
        {
            this.nextRound()
        }
        return this.playerWon()
    }

    get gameRound()
    {
        return this.round
    }

    incrementRound()
    {
        this.round = Number(this.round) + 1
    }

    showPlayers()
    {
        return this.players
    }

    addPlayer(player : Player)
    {
        this.players.push(player)
    }

    giveCard()
    {
        this.players.map((player)=> {
            let card = this.deck.getRandomCard()
            player.setCard(card)
        })
    }

    giveCards(count : Number)
    {
        this.players.map((player)=> {
            let cards = this.deck.getRandomCards(count)
            player.setCards(cards)
        })
    }

    compareCards(cards : Card[] = [])
    {
        let result : Card = cards[0]
        cards.forEach((card)=> {
            if(result.isGreater(card))
            {
                result = card
            }
        })
        return result
    }

    firstRound()
    {
        this.giveCards(5)
    }

    nextRound()
    {
        if(!this.players[0].hasCards())
        {
            this.gameOver = true
            return
        }

        let stack = this.players.map((player)=> {
            return player.putMaxCardDown()
        })

        let maxCard = this.compareCards(stack)

        let playerWon : Player = this.players[0]
        stack.filter((card, index)=> {
            if(card.isCard(maxCard))
            {
                playerWon = this.players[index]
            }
        })

        playerWon.incrementScore(10)

        if(this.deck.countCards() > 0)
        {
            this.giveCards(1)
        }

        this.incrementRound()
    }

    playerWon() : Player
    {
        let result : Player = this.players[0]
        this.players.filter((player)=> {
            if(player.playerScore > result.playerScore)
            {
                result = player
            }
        })
        return result
    }
}
