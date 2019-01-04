
var RepoFactory = function () {

    var repos = this;
    var repoList = [{name:"task", source:"./taskRepository"},
                    {name:"user", source:"./userRepository"},
                    {name:"project", source:"./projectRepository"}];

    repoList.forEach( repo => { repos[repo.name] = require(repo.source) } );
};

module.exports = new RepoFactory();