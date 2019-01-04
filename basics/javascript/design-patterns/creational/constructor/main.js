var Task = require("./task");

var task1 = new Task("read one chapter of a book");
var task2 = new Task("take 7 minute workout");
var task3 = new Task("drink a nice cup of coffee");

task1.complete();
task2.save();
task3.complete();