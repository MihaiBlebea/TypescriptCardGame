"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hand {
    constructor() {
        this.cards = [];
        this.cards = [];
    }
    get showHand() {
        return this.cards.map((card) => {
            return {
                value: card.cardValue,
                sign: card.cardSign
            };
        });
    }
    addCard(card) {
        this.cards.push(card);
    }
    count() {
        return this.cards.length;
    }
    maxCard() {
        let result = this.cards[0];
        this.cards.forEach((card, index) => {
            if (index > 0 && result.cardValue < card.cardValue) {
                result = card;
            }
        });
        return result;
    }
    minCard() {
        let result = this.cards[0];
        this.cards.forEach((card, index) => {
            if (index > 0 && result.cardValue > card.cardValue) {
                result = card;
            }
        });
        return result;
    }
    generateRandomIndex(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    randomCard() {
        return this.cards[this.generateRandomIndex(0, this.cards.length)];
    }
    dropCard(card) {
        this.cards.map((item, index) => {
            if (card.cardSign === item.cardSign && card.cardValue === item.cardValue) {
                this.cards.splice(index, 1);
            }
        });
    }
}
exports.Hand = Hand;
