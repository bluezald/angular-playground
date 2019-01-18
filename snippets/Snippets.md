# Javascript
## RegEx
- Common RegEx
```javascript
// Digits
/^[0-9]+$/

// Alphabetic Characters
/^[a-zA-Z]+$/

// Alpha-Numeric Characters
/^[a-zA-Z0-9]+$/

// Email Address
/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/

// Password
// The password must contain one lowercase letter, one uppercase letter, one number, one unique character such as !@#$%^&? and be at least 6 characters long.
/^.*(?=.{6,})(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
```
- To add more soon

## Pipes
- list of common pipes to take note of:
```javascript
{{product.price | lowercase}}
{{productName | uppercase}}
{{product.price | currency }}
// currency pipe also accepts parameters
{{product.price | currency:'USD':'symbol':'1.2-2'}}
// specifies the symbol of the currency,
// the digit and the minimum-maximum fraction
```

# HTML
## Forms
- Basic Form Controls
```html
<!-- Drop-down -->
<div class="form-group">
    <label for="duration">Duration:</label>
    <em *ngIf="duration.invalid && duration.dirty">Required</em>
    <select class="form-control" formControlName="duration">
        <option value="">select duration...</option>
        <option value="1">Half Hour</option>
        <option value="2">1 Hour</option>
        <option value="3">Half Day</option>
        <option value="4">Full Day</option>
    </select>
</div>
```
- Common Form Validations
### Template-based forms
```html
<!-- Basic -->
<div class="form-group" [ngClass]="{'error': newEventForm.controls.name?.invalid && newEventForm.controls.name?.touched}">
    <label for="eventName">Event Name:</label>
    <em *ngIf="newEventForm.controls.name?.invalid && (newEventForm.controls.name?.touched)">Required</em>
    <input (ngModel)="newEvent.name" name="name" required id="name" type="text" class="form-control" placeholder="Name of your event..." />
</div>


```

### Reactive-based forms
- Displaying different error messages to a form control
```html
<div class="form-group" [ngClass]="{'error':!validateFirstName()}">
    <label for="firstName">First Name:</label>
    <em *ngIf="!validateFirstName() && profileForm.controls.firstName.errors.required">Required</em>
    <em *ngIf="!validateFirstName() && profileForm.controls.firstName.errors.pattern">Must start with a letter</em>
    <input formControlName="firstName" id="firstName" type="text" class="form-control" placeholder="First Name..." />
</div>
```