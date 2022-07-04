"use strict";
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
// }
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('pratik', 'work on the website', 250);
console.log(invOne.format());
