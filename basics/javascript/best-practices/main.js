function returnObject() {
    var someTrueThing = true;
    if(someTrueThing) {
        return {
            hi: 'hello'
        };
    }
}

var one = 1

if(10 === 10) {
    console.log("10 eqauls 10");
}

// Promises sample

// before Promise
// function asyncMethod(message, callback) {
//     setTimeout(function() {
//         console.log(message);
//         callback();
//     }, 1000);
// }

// This type of code block should be avoided
// asyncMethod('Open DB connection', function() {
//     asyncMethod('Find User', function() {
//         asyncMethod('Validate User', function() {
//             asyncMethod('Do Stuff', function() {});
//         });
//     });
// });

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

asyncMethod('Open DB connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function(){});