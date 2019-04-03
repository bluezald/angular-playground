## Events

### stopPropagation()
- method prevents propagation of the same event from being called. Propagation means bubbling up to parent elements or capturing down to child elements.

### preventDefault()
- this method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
```js
event.preventDefault();
```
```html
<!DOCTYPE html>
<html>
    <body>

    Try to check this box: <input type="checkbox" id="myCheckbox">

    <p>Toggling a checkbox is the default action of clicking on a checkbox. The preventDefault() method prevents this from happening.</p>

    <script>
        document.getElementById("myCheckbox").addEventListener("click", function(event){
            event.preventDefault()
        });
    </script>

    </body>
</html>
```