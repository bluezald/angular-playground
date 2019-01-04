
var ProjectRepository = function() {
    return {
        get: function(id) {
            console.log("Getting project: " + id);
            return { name: `Project ${id} from DB` }
        },

        save: function(project) {
            console.log("Saving " + project.name + "to the db");
        }
    }
}

module.exports = ProjectRepository();