var RepoFactory = require("./repoFactory");

var task = RepoFactory.task.get(123);
var user = RepoFactory.user.get(456);
var project = RepoFactory.project.get(789);

console.log(task.name);
console.log(user.name);
console.log(project.name);