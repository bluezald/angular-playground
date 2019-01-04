## Practical Design Patterns

Problem | Solution |
---------|----------|
Designing Service Layers | Module Pattern |
Overly Complicated Object Interfaces (DOM) | Facade Pattern (jquery) |
Visibility into State Changes | Observer Pattern |

### Types of Patterns common in Javascript

#### Creational
- Constructor Pattern 
    - to create new objects with their own object scope
    - sample is in Creational/task.js
    ```javascript
    // Constructor Pattern 
    var Task = function(name) {
        this.name = name;
        this.completed = false;
    }
    // Prototypes

    Task.prototype.complete = function() {
        console.log("Completing Task " + this.name);
        this.completed = true;
    }

    Task.prototype.save = function() {
        console.log("Saving Task: " + this.name);
    }
    ```

- Module Pattern
    - Object Literal
    ```javascript
    var Repository = function() {
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
    ```
- Factory Pattern
    - simplify object creation of multiple object types
    ```javascript
    var RepoFactory = function () {

    var repos = this;
    var repoList = [{name:"task", source:"./taskRepository"},
                    {name:"user", source:"./userRepository"},
                    {name:"project", source:"./projectRepository"}];

    repoList.forEach( repo => { 
        repos[repo.name] = require(repo.source) } );
    };

    module.exports = new RepoFactory();
    ```
- Singleton
    - Node.js uses the CommonJS
    ```javascript
    var SingletonFactory = (function(){
        function SingletonClass() {
            //do stuff
        }
        var instance;
        return {
            getInstance: function() {
                if (instance == null) {
                    instance = new SingletonClass();
                    // Hide the constructor so the 
                    // returned object can't be new'd...
                    instance.constructor = null;
                }
                return instance;
            }
        };
    })();

    var test = SingletonFactory.getInstance();
    ```

#### Structural

- Decorator Pattern
    - Used to add new functionality to an existing object, w/o being obtrusive
    - wraps an object
    - protects existing objects
    - allows extended functionality
    - by default, you can decorate an object right away in javascript
    ```javascript
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
    ```

- Facade
    - simplified interface
    - jquery as an example
    - can be combine with the module pattern

    ```javascript
    const TYPE_MUSIC = "music";
    const TYPE_MOVIE = "movie";
    const TYPE_TV = "tv";
    const TYPE_BOOK = "book";

    class CultureFacade {
        
        constructor(type) {
            this.type = type;
        }

        get(id) {
            switch (this.type) {
                case TYPE_MUSIC: {
                    return this.tryToReturn(this.findMusic, id);
                }

                case TYPE_MOVIE: {
                return this.tryToReturn(this.findMovie, id);
                }

                case TYPE_TV: {
                return this.tryToReturn(this.findTVShow, id);
                }

                case TYPE_BOOK: {
                    return this.tryToReturn(this.findBook, id);
                }

                default: {
                    throw new Error("No type set!");
                }
            }
        }

        get error() {
            return { status: 404, error: `No item with this id found` };
        }

        findMusic(id) {
            const db = new FetchMusic();
            return db.fetch(id);
        }
        
        findMovie(id) {
            return new GetMovie(id);
        }
        
        findTVShow(id) {
            return getTvShow(id);
        }
        
        findBook(id) {
            return booksResource.find(item => item.id === id);
        }

        tryToReturn(func, id) {
            const result = func.call(this, id);

            return new Promise((ok, err) => !!result
                ? ok(result)
                : err(this._error));
        }
    }
    ```

- Flyweight
    - shares data across objects (like the prototype)
    - only if you have a large number of objects
    ```javascript
    var Task = function(data) {
    this.name = data.name;
    
    // Since other properties of this task
    // will not be always unique, we can
    // use a flyweight

    this.flyweight = FlyweightFactory
    .get(data.project,
        data.priority,
        data.user,
        data.completed
    )

    this.project = data.project;
    this.priority = data.priority;
    this.user = data.user;
    this.completed = data.completed;
    }

    function Flyweight(project, priority, user, completed) {
        this.project = project;
        this.priority = priority;
        this.user = user;
        this.completed = completed;
    };

    var FlyweightFactory = function() {
        var flyweights = {};

        var get = function(project, priority, user, completed) {
            if(!flyweights[project + priority + user + completed]) {
                flyweights[project + priority + user + completed] = 
                new Flyweight(project, priority, user, completed);
            }
            return flyweights[project + priority + user + completed];
        };

        var getCount = function() {
            var count = 0;
            for(var f in flyweights) count++;
            return count;
        }

        // Revealing Module Pattern
        return {
            get: get,
            getCount: getCount
        }
    }();
    ```

#### Behavioral
- Command
- Mediator
- Observer


### Other Notes

- IIFE
```javascript
(function() {
    // function code
}());
```
- Object.create() - method creates a new object, using an existing object as the prototype of the newly created object.