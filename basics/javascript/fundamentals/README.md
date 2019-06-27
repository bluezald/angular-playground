## Tools
- Visual Studio Code
- Webpack installed via npm
- [webpack-starter](https://github.com/wbkd/webpack-starter)

## Notes

- constants must be initialized

```javascript
const pi = 3.14
```
- cast something to boolean
```javascript
let truthy = "true";
let booleanValue = !!truthy;
```

### let vs var
- let has block scoping or lexical scoping, this is a modern approach compared to var
- var can be hoisted, let can't

### Rest Parameters

- this will accept multiple values in a function call and convert all those parameters into an array when refered inside the function. Rest parameters must be the last parameter. Cause it's read "as the rest of the parameters"

```javascript
function aggregateScore(...allScore) {
    allScore.forEach( id => console.log(id) );
}

aggregateScore(100, 75, 80);
```

### Resting and Spreading
- https://blog.bitsrc.io/6-tricks-with-resting-and-spreading-javascript-objects-68d585bdc83

- **Adding Properties**
```js
const user = { id: 100, name: 'Howard Moon'}
const userWithPass = { ...user, password: 'Password!' }

user //=> { id: 100, name: 'Howard Moon' }
userWithPass //=> { id: 100, name: 'Howard Moon', password: 'Password!' }
```

- **Merged Objects**
```js
const part1 = { id: 100, name: 'Howard Moon' }
const part2 = { id: 100, password: 'Password!' }

const user1 = { ...part1, ...part2 }
//=> { id: 100, name: 'Howard Moon', password: 'Password!' }
```

### Destructuring Arrays

```javascript
let array1 = [1, 2, 3];
let [data1, ...restOfTheData] = array1

// data1 = 1
// restOfTheData = [2, 3]
```
- this will destructure an array into individual variables

### Destructuring Objects
- if you're destructuring arrays, use braces, if you're destructuring objects, use curly braces
```javascript
let car = { id: 5000, style: "convertible" };
let { id, style } = car;

console.log(id, style); // 5000 convertible

// when the destructuring comes after the declaration, use parenthesis.

let id, style;
{ id, style } = car; // this will result an error

// correct way is

let id, style
({id, style} = car);
```

### Spread Syntax
```javascript
function startCars(car1, car2, car3) {
    console.log(car1, car2, car3);
}

let cardIds = [1, 2, 3];
startCars(...carIds);
```
- this is like the opposite of rest syntax

### Using Logical OR (||) as null coalescing
- Examples are from here: https://stackoverflow.com/questions/476436/is-there-a-null-coalescing-operator-in-javascript

```js
var whatIWant = null || new ShinyObject(); // is a new shiny object
var whatIWant = undefined || "well defined"; // is "well defined"
var whatIWant = 0 || 42; // is 42
var whatIWant = "" || "a million bucks"; // is "a million bucks"
var whatIWant = "false" || "no way"; // is "false"
```
- but there's definitely a feature in the newer version of javascript: https://github.com/tc39/proposal-nullish-coalescing


### typeof()
```javascript
typeof(1); // number
typeof(true); // boolean
typeof("Hello"); // string
typeof(function(){}); // function
typeof({}); // object
typeof(null); // object
typeof(undefined); // undefined
typeof(NaN); // number
```

### IIFE
- Immediately Invoked Function Expression
```javascript
let app = (function() {
    let carId = 123;
    console.log("in function");
    return {};
})();
```

### call() and apply()
- call and apply are similar, the difference is that apply accepts a list of arguments.

### bind()
- assigns a new this to a function and copies that function
- Bind creates a new function that will have this set to the first parameter passed to bind().
- Understanding bind, helps with the problem of 'losing this'
- One good example: https://javascript.info/bind
```js
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
```
- That’s because setTimeout got the function user.sayHi, separately from the object. The last line can be rewritten as:
```js
let f = user.sayHi;
setTimeout(f, 1000); // lost user context
```
- ```func.bind(context, ...args)``` - returns a bound variant of  function ```func``` that fixes the context ```this```

### Events
- HTML events are "things" that happen to HTML elements.


### Arrow Functions
```javascript
() => {}
```
- Arrow functions do not have their own "this" value

### Default Parameters
- similar in swift
```javascript
let trackCar = function(carId, city="NY") {
    console.log(`Tracking ${carId} in ${city}.`);
};
```
- the default value will be assigned on the right side of the parameter

### Constructor Function
- by convention, the function name starts with a capital letter
```javascript
function Car(id) {
    this.carId = id;
    this.start = function() {
        console.log("start: " + this.carId);
    };
}

let car = mew Car(123);
```

### Prototypes
- base on the above section, if we have multiple instance of car, we duplicated the start function multiple times. One way to optimise this is to define the start() from the Car.prototype

```javascript
function Car(id) {
    this.carId = id;
}

Car.prototype.start = function() {
        console.log("start: " + this.carId);
    };

let car = mew Car(123);
car.start();
```

#### Polyfill
- is typical used prototypes.
- this is like extension in Swift on native iOS api or classes

### JSON
- Javascript Object Notation
```javascript
 let car = {
     id: 123,
     style: "convertible"
 }

 console.log( JSON.stringify(car) );
 ```
 - this is use to transmit data into the web
 - Parsing JSON
 ```javascript
 let jsonIn = 
 `
    [
        {"cardId" : 123},
        {"cardId" : 123},
        {"cardId" : 123}
    ]
 `;

 let carIds = JSON.parse(jsonIn);
 console.log( carIds );
 ```

### Arrays

Arrays are non-primitive. If we assign a non-Primitive value to a variable, that variable doesn't actually holds the value, rather holds the reference.

- References:
    - https://blog.greenroots.info/ways-to-empty-an-array-in-javascript-and-the-consequences-cjwt45q9d002h2fs1kz5a77a2

### Array with Closures
 - forEach()
 ```javascript
 cars.forEach( car => console.log(car) );
 ```
 - filter()
 ```javascript
 let filteredCars = cars.filter( 
     car => car.style === "convertible" 
);
 ```
- every()
    - this will do a checking on every element, if all conditions are true, it will return true, if not, it will return false
```javascript
let result = carIds.every(
    car => car.carId > 0
);
```
- find()
```javascript
// this will locate the first match
let car = cars.find(
    car => car.carId > 500
);
```

### Classes
```javascript
class Car {

}

let car = new Car();
```

#### Constructors and Properties
```javascript
class Car {
    constructor(id) {
        this.id = id;
    }
}
let car = new Car(123);
console.log(car.id);
```

#### Methods
- no longer needed to add the function keyword
```javascript
class Car {
    constructor(id) {
        this.id = id;
    }
    identify(suffix) {
        return `Car Id: ${this.id} ${suffix}`;
    }
}
let car = new Car(123);
console.log(car.identify("!"));
```

#### Inheritance
```javascript
class Vehicle {
    constructor() {
        this.type = "car";
    }
    start() {
        return `Starting: ${this.type}`;
    }
}

class Car extends Vehicle {

}
let car = new Car();
console.log(car.type);
```
- You can access the parent class using the **super**

### Modules
- you can define a module by adding the keyword **export**
```javascript
export class Car {
    constructor(id) {
        this.id = id;
    }
}
```

#### Importing Modules
```javascript
// In another file
import { Car } from "./models/car.js";

let car = new Car(123);
console.log(car.id);
```


### BOM and DOM
 - Browser Object Model
 - Document Object Model

#### window
- window is the global object
- a window containing a DOM document.

#### Timers
- setTimeout(), clearTimeout(timeoutId)
- setInterval(), clearInterval(intervalId)

#### location
- **properties**: href, hostname, port, pathname, search
- **methods**: assign(), reload()

#### document
- **properties**: body, forms, links
- **methods**: getElementById()
- **events**: onLoad()

#### Modifying DOM elements
- access first the element, then change the element lol XD
```javascript
let element = document.getElementById("first");
element.style.color = "blue";
```

### Errors in Javascript
- use try, catch to handle errors (optional add finally block)

#### Developer Defined Errors
```javascript
try {
    // code here...
    throw new Error("Custom Error");
} catch(error) {
    console.log("error: ", error);
}
```

### Promises
- represents a value which we do not have access just yet

```js
new Promise(executor);
// executor is - A function that is passed with the arguments resolve and reject.
```

### Forms
HTML
```html
<form id="user-form" action="/somepath">
    <input type="text" name="firstname" >
    <br>
    <input type="text" name="lastname" >
    <br>
    <input type="submit" value="Submit">
</form>
```

Javascript
```javascript
let form = document.getElementById("user-form");

form.addEventListener("submit", event => {

    let firstname = form.elements["firstname"];
    let lastname = form.elements["lastname"];

    console.log(firstname.value);
});
```

### Security and Building for Production
- don't add sensitive information in your javascript variables
- don't use global variables

### eval()
- avoid eval to avoid injection attacks
```javascript
let inputString = "alert('Warning: Your Computer is infected with a Virus');";
eval(inputString);
```

### Preventing MITM Attacks
- this is handled in the server side
- Use SSL
- Use HTTP Header: Strict-Transport-Security
- Use cookie attributes: Secure and HttpOnly

### XSS - Cross-site Scripting
- addressing XXS attacks use: CSP and CORS
- CSP: Content Security Policy (HTTP Header)
- CORS: Cross Origin Resource Sharing

### Build Application for Production
```
// when you're using webpack you can generate a production build
npm run build
```

### Higher-Order Functions
- Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. Since we have already seen that functions are regular values, there is nothing particularly remarkable about the fact that such functions exist. The term comes from mathematics, where the distinction between functions and other values is taken more seriously.

### Yarn vs NPM
https://scotch.io/@brian_kimo/npm-vs-yarn