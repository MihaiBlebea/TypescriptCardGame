"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hand_1 = require("./Hand");
class Player {
    constructor(name) {
        this.name = name;
        this.hand = new Hand_1.Hand();
        this.score = 0;
    }
    get playerName() {
        return this.name;
    }
    get playerScore() {
        return this.score;
    }
    set playerName(value) {
        this.name = value;
    }
    set playerScore(value) {
        this.score = value;
    }
    incrementScore(value) {
        this.score = Number(this.score) + Number(value);
    }
    decrementScore(value) {
        this.score = Number(this.score) - Number(value);
    }
    setCard(card) {
        this.hand.addCard(card);
    }
    setCards(cards = []) {
        cards.map((card) => {
            this.setCard(card);
        });
    }
    putMaxCardDown() {
        let card = this.hand.maxCard();
        this.hand.dropCard(card);
        return card;
    }
    showHand() {
        return this.hand.showHand;
    }
    hasCards() {
        if (this.hand.count() > 0) {
            return true;
        }
        return false;
    }
    dropHand() {
        this.hand = new Hand_1.Hand();
    }
}
exports.Player = Player;
