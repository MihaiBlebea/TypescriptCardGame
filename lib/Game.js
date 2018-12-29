"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor(deck) {
        this.players = [];
        this.deck = deck;
        this.round = 0;
        this.gameOver = false;
    }
    start() {
        this.firstRound();
        while (this.gameOver === false) {
            this.nextRound();
        }
        return this.playerWon();
    }
    get gameRound() {
        return this.round;
    }
    incrementRound() {
        this.round = Number(this.round) + 1;
    }
    showPlayers() {
        return this.players;
    }
    addPlayer(player) {
        this.players.push(player);
    }
    giveCard() {
        this.players.map((player) => {
            let card = this.deck.getRandomCard();
            player.setCard(card);
        });
    }
    giveCards(count) {
        this.players.map((player) => {
            let cards = this.deck.getRandomCards(count);
            player.setCards(cards);
        });
    }
    compareCards(cards = []) {
        let result = cards[0];
        cards.forEach((card) => {
            if (result.isGreater(card)) {
                result = card;
            }
        });
        return result;
    }
    firstRound() {
        this.giveCards(5);
    }
    nextRound() {
        if (!this.players[0].hasCards()) {
            this.gameOver = true;
            return;
        }
        let stack = this.players.map((player) => {
            return player.putMaxCardDown();
        });
        let maxCard = this.compareCards(stack);
        let playerWon = this.players[0];
        stack.filter((card, index) => {
            if (card.isCard(maxCard)) {
                playerWon = this.players[index];
            }
        });
        playerWon.incrementScore(10);
        if (this.deck.countCards() > 0) {
            this.giveCards(1);
        }
        this.incrementRound();
    }
    playerWon() {
        let result = this.players[0];
        this.players.filter((player) => {
            if (player.playerScore > result.playerScore) {
                result = player;
            }
        });
        return result;
    }
}
exports.Game = Game;
