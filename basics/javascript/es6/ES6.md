## ES6 / ECMAScript 2015

## Other Notes
- for **const** variable name it like this: MY_CONST_VAR
- arguments in a function with default parameters still refer to the arguments pass in the function.
### Function constructor
- creates a new Function object. Calling the constructor directly can create functions dynamically, but suffers from security and similar (but far less significant) performance issues to eval. However, unlike eval, the Function constructor creates functions which execute in the global scope only.
```javascript
var sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6));
// expected output: 8
```

### Arrow Functions
- In the arrow function, you can leave off the **return** keyword
- the this in an arrow function will refer to the context of the code that we're in.
- You can't bind a new object to an arrow function
- a call to **call()**, **apply()** or **bind()** is useless in an arrow function.
- Arrow functions don't have access to the prototype property

### Default function parameters
```javascript
'use strict';
var getProduct = function(productId = 1000, type = 'software') {
    console.log(productId + ', ' + type);
}
// but if you pass in undefined in a parameter with default value
getProduct(undefined, 'hardware'); // 1000, hardware
```
- You can pass in a variable or a function to a default parameter assignment

### Object Literal Extensions
```javascript
'use strict'
var method = 'doIt';
var productView = {
    [method + "-001"]() {s
        console.log("in a method");
    }
};
productView['doIt-001']();
```
### Octal and Binary Literals
```javascript
'use strict';
var value = 0o10; // = 8
var value2 = 0b10; // = 2
```

### Template Literals
- backtick symbol ``
- String interpolation
```javascript
'use strict'
let invoiceNum = '1350';
console.log(`The invoice number is ${invoiceNum}`);
```
- the variable is inside ${}

### Destructuring
```javascript
let salary = ['32000', '50000', ['88000', '99000']];
let [low, average, [actualLow, actualHigh]] = salary;
console.log(actualLow); // 88000
```
- You can also have nested destructuring
- When destructuring object with an early declaration, make sure to add in parenthesis
```javascript
'use strict';
let salary = {
    low: '32000',
    average: '50000',
    high: '75000'
};
let newLow, newAverage, newHigh; // setting new variable name for destructured properties of an object.
{ low: newLow, average: newAverage, high: newHigh } = salary;
console.log(newHigh);
```
- Destructuring requires an iterator

### Classes
- Classes are not hoisted
- we cannot call the call() to change the this into a constructor function.
- If a subclass overrides a constructor funtion

#### Static Members in Class
```javascript
class Project {
    static getDefaultId() {
        return 0;
    }
}
Project.getDefaultId(); // returns 0
```
- You can attach static properties by attaching it to the class name
```javascript
Project.staticId = 100;
```

### new.target
- new.taget - points out the class constructor by default
- points out to the initial constructor that was called.

### Symbols
- generate a unique identifier
```javascript
let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);
```
### Well-known Symbols
- for meta-programming