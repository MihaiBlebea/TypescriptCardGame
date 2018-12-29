import { PlayerInterface } from './Player'
import { Card } from './Card'


export interface GameInterface
{
    start() : PlayerInterface

    incrementRound() : void

    showPlayers() : PlayerInterface[]

    addPlayer(player : PlayerInterface): void

    giveCard() : void

    giveCards(count : Number) : void

    compareCards(cards : Card[]) : Card

    firstRound() : void

    nextRound() : void

    playerWon() : PlayerInterface
}
