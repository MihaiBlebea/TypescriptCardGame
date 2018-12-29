"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = (constructorFn) => {
    constructorFn.prototype.print = () => {
        return constructorFn.name;
    };
};
exports.bar = (constructorFn) => {
    constructorFn.prototype.explode = () => {
        return 'Booooommm !!!';
    };
};
let Human = class Human {
    constructor(name) {
        this.name = name;
    }
    get humanName() {
        return this.name;
    }
};
Human = __decorate([
    exports.bar,
    exports.foo
], Human);
exports.Human = Human;
