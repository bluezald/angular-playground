// Constructor Pattern

var Task = function(data) {
    this.name = data.name;
    this.completed = false;
}

// Prototypes

Task.prototype.complete = function() {
    console.log("Completing Task: " + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log("Saving Task: " + this.name);
}

// You can also use class in ECMA 2015
/**
class Task {

    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    
    complete() {
        console.log("Completing Task " + this.name);
        this.completed = true;
    }
    
    save() {
        console.log("Saving Task: " + this.name);
    }

}
*/

module.exports = Task;