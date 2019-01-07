## Fixing Legacy Codes

### Function Stubs
- should be one line of code of the new enhanced function
```javascript
// this is the legacy code
{
    draw: function(left, top, width, height) {
        // pass in default values
        _canvas.drawNew(left, top, width, height, "black", "silver");
    },
    // this is the newer version
    drawNew: function(left, top, width, height, stroke, fill) {
        var canvas = document.getElementById("theCanvas");
        if(canvas.getContext) {
            var context = canvas.getContext("2d");
            context.strokeStyle = stroke;
            context.fillStyle = fill;
            context.fillRect(left, top, width, height);
            context.strokeRect(left, top, width, height);
        }
    }
    
}
```

### Default Values
- useful when 2 or more parameters are optional
- optional paramteres should be at the end of the paramter list.

### Changing to an Object Parameter
```javascript
// pass in an object instead of multiple parameters
_canvas.draw({stroke: "red", left: 140, top: 450, height: 20, width: 360});
```
- You can also add in default values on the object parameter

## Event Handling
- Chaining methods in a same selector in jquery
```javascript
$('.clickable')
    .click(function() {
        showEventMessage.call(this);
    })
    .dblclick(function() {
        showEventMessage.call(this, { eventType: 'double click' });
    });
```
- Events bubble up the DOM

## Advanced Event Handling

### Namespace
```javascript
$('.clickable')
    .on('click.demo dbclick.demo mousedown.demo', function(event) {
        // code here...
    })
    .on('click.test', function(event) { // the *.test is the namespace of an event
        // another click here
    })
    .off('click.demo');
    // when we set the off function for the click.demo namespaced
    // event. we only get the handling for the click.test function
```
### Delegation

### Custom Events
```javascript
$('.clickable')
    .on('click', function(event) {
        // code here...
        var $this = $(this), 
        clickCount = ($this.data('clickcount') || 0) +1;

        if(clickCount === 3) {
            $this.trigger('click3');
        }
    })
    .on('click3', function(event) { // click3 is a custom event
        // this is your custom event handler
    });
```
### Deferred Objects
#### jQuery Deferred Processing
- Implements the javascript promise
- AJAX Calls
- **$.when** - groups one ore more deferred processes into one single code block, and make a notification of completion when all code is finished.
```javascript
$.when(
    $.get('deferred-objects-content-1.html', function(result) {
        $('#section1').html(result);
    }, 'html'),
    $.get('deferred-objects-content-2.html', function(result) {
        $('#section2').html(result);
    }, 'html'),
    $.get('deferred-objects-content-3.html', function(result) {
        $('#section3').html(result);
    }, 'html')
)
.then(function() {
    $('#proceed').removeAttr('disabled');
});
```
#### Creating a Deferred Object


## Other Notes
- Duplicate code is a breeding ground for maintenance nightmares.
```javascript
$(function() { ... });
// is just jQuery short-hand for

$(document).ready(function() { ... });
```
- Use the shorthand methonds on and off to attach event handlers
- when you pass in an object in **$()** - it creates a jquery object
- **Short-circuit Evaluation** - Interpeter looks for the value of a, it's undefined so it's false so it moves on, then it sees b which is null, which still gives false result so it moves on, then it sees c - same story. Finally it sees d and says 'huh, it's not null, so I have my result' and it assigns it to the final variable.

