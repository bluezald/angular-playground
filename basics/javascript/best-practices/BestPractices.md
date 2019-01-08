# Best Practices

## Syntax
- **Semicolons** - some may say that semicolons are optional in javascript. But the key is consistency.
It's preferred to use semicolon to be consistent across other languges.
- linter scans your code to detect potential problems.
- Curly Braces - should be on the same line.
- Equality - use triple equals "===" and use "==" only if needed
- **Variables** in javascript are hoisted. Hoisting is javascript's default behavior of moving all declarations to the top of the current scope.
- **Functions** - a function is a type. It's a first class object.
    - Declarations
    - Expressions

## Behaviors
### Global Variables
- avoid writing variable assignment without declaration, cause this may cause an automatic declaration of a global variable
```javascript
function print(input) {
    stringToPrint = input; // must write "var stringToPrint = input" instead
    console.log(stringToPrint);
}

print('Hello');
console.log(stringToPrint); // We shouldn't expect a print here, but it does
```
### Strict Mode
```javascript
'use strict';
// in the top of the file
```
- use strict scopes appropriately and can be limited inside a function
- The "use strict" directive was new in ECMAScript version 5.
### Read Only Properties
```javascript
var obj = {};

Object.defineProperty(obj, 'readonly', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'This var is read only'
});

obj.readOnly = 'trying to change readonly object';
```
### Deleting Properties
- only work in properties, and not on object, use strict keyword cant help to avoid this confusion

## Async Patterns

### Callbacks
- avoid callback hell
- use named functions instead if you have nested callbacks

### Promises
- Before promises nested callbacks look like this
```javascript
// before Promise
function asyncMethod(message, callback) {
    setTimeout(function() {
        console.log(message);
        callback();
    }, 1000);
}

// This type of code block should be avoided
asyncMethod('Open DB connection', function() {
    asyncMethod('Find User', function() {
        asyncMethod('Validate User', function() {
            asyncMethod('Do Stuff', function() {});
        });
    });
});
```
- By using Promise, we have:
```javascript
// Using Promise
function asyncMethod(message) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(message);
            resolve();
        }, 1000);
    });
}

function findUser() {
    return asyncMethod('Find User');
}

function validateUser() {
    return asyncMethod('Validate User');
}

function doStuff() {
    return asyncMethod('Do Stuff');
}

// And we can have the execution like this
asyncMethod('Open DB connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function(){});
```

## Production Code

### NPM Settings
```json
{
    // other key-value in package.json
    "engines": {
        "node": "4.2.1" // tells that your code uses the node version 4.2.1
    }
}
```

## Other Notes
- convert a number to an octal
```javascript
var octal = parseInt(120, 8); // pass in 8 in the second parameter
```
- **new** keywords binds a new "this" scope on a function.
- In javascript, when dealing with cross-platform project, name files all in lowercase and/or in dash case (my-object.js)
- Keep it Simple, and Keep your Environment Simple.