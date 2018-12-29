"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = require("./Card");
const Deck_1 = require("./Deck");
const Player_1 = require("./Player");
const Game_1 = require("./Game");
var CardGame;
(function (CardGame) {
    CardGame.card = (value, sign) => {
        return new Card_1.Card(value, sign);
    };
    CardGame.deck = () => {
        return new Deck_1.Deck();
    };
    CardGame.player = (name) => {
        return new Player_1.Player(name);
    };
    CardGame.game = (deck) => {
        return new Game_1.Game(deck);
    };
})(CardGame = exports.CardGame || (exports.CardGame = {}));
