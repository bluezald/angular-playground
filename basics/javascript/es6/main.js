'use strict';

var method = 'doIt';
var productView = {
    [method + "-001"]() {
        console.log("in a method");
    }
};
productView['doIt-001']();

// let salary = ['32000', '50000', ['88000', '99000']];
// let [low, average, [actualLow, actualHigh]] = salary;
// console.log(actualLow);

let salary = {
    low: '32000',
    average: '50000',
    high: '75000'
};
let newLow, newAverage, newHigh; // setting new variable name for destructured properties of an object.
({ low: newLow, average: newAverage, high: newHigh } = salary);
console.log(newHigh);

let [string1, string2] = "the quick brown forx jumps over the lazy dog";
console.log(`min: ${string1} max: ${string2}`);

class Task {
    constructor() {
        console.log(new.target);
    }
    showId() {
        console.log('99');
    }
}

// console.log(typeof Task);
let task = new Task();
// console.log(typeof task);
// console.log(task.showId === Task.prototype.showId);

let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);

let symbol1 = Symbol('event');
let symbol2 = Symbol('event');
console.log(`symbol1: ${symbol1.toString()} symbol2: ${symbol2.toString()}`);
console.log(symbol1 === symbol2);