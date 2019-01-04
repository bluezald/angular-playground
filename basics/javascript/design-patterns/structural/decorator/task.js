
var Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log("Completing Task: " + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log("Saving Task: " + this.name);
}

var myTask = new Task("Legacy Task");
myTask.complete();
myTask.save();

// Decorator Pattern for Task Object

var UrgentTask = function(name, priority) {
    Task.call(this, name);
    this.priority = priority;
}
UrgentTask.prototype = Object.create(Task.prototype); 
// makes a new object out of Task.prototype

UrgentTask.prototype.notify = function() {
    console.log("This is a new function decorated in Urgent Task");
}

UrgentTask.prototype.save = function() {
    console.log("Saving Urgent Task: " + this.name);
    Task.prototype.save.call(this);
}

var urgentTask = new UrgentTask("Urgent Task");
urgentTask.save();