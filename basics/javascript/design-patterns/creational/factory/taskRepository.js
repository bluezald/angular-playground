
var TaskRepository = function() {
    return {
        get: function(id) {
            console.log("Getting task: " + id);
            return { name: "New Task from DB" }
        },

        save: function(task) {
            console.log("Saving " + task.name + "to the db");
        }
    }
}

module.exports = TaskRepository();