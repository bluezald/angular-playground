
var UserRepository = function() {
    return {
        get: function(id) {
            console.log("Getting user: " + id);
            return { name: `User ${id} from DB` }
        },

        save: function(user) {
            console.log("Saving " + user.name + "to the db");
        }
    }
}

module.exports = UserRepository();