"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CardType_1 = require("./CardType");
class Card {
    constructor(value, sign) {
        if (!this.assertValueInInterval(value)) {
            throw new Error('Value is not between 1 and 14 or is 11');
        }
        if (!this.assertSignIsValid(sign)) {
            throw new Error('Sign is not in valid array');
        }
        this.value = value;
        this.sign = sign;
    }
    get cardValue() {
        return this.value;
    }
    get cardSign() {
        return this.sign;
    }
    set cardValue(value) {
        if (!this.assertValueInInterval(value)) {
            throw new Error('Value is not between 1 and 14 or is 11');
        }
        this.value = value;
    }
    set cardSign(value) {
        if (!this.assertSignIsValid(value)) {
            throw new Error('Sign is not in valid array');
        }
        this.sign = value;
    }
    assertValueInInterval(value) {
        return 0 < value && value <= 14 && value !== 11;
    }
    assertSignIsValid(sign) {
        return Object.values(CardType_1.CardType).includes(sign);
    }
    isGreater(card) {
        if (card.cardValue < this.cardValue) {
            return true;
        }
        return false;
    }
    isLess(card) {
        if (card.cardValue > this.cardValue) {
            return true;
        }
        return false;
    }
    isGreaterOrEqual(card) {
        if (card.cardValue <= this.cardValue) {
            return true;
        }
        return false;
    }
    isLessOrEqual(card) {
        if (card.cardValue >= this.cardValue) {
            return true;
        }
        return false;
    }
    isEqual(card) {
        if (card.cardValue === this.cardValue) {
            return true;
        }
        return false;
    }
    isCard(card) {
        if (card.cardValue === this.cardValue && card.cardSign === this.cardSign) {
            return true;
        }
        return false;
    }
}
exports.Card = Card;
