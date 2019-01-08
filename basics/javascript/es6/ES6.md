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