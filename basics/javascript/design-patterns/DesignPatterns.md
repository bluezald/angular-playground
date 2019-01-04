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
  - Flyweight

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