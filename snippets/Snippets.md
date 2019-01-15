# RegEx
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
