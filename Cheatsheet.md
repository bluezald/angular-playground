# Cheatsheet
- this is a cheatsheet for web-app development, from common dependencies use in most applications, testing and workflow

## Prerequisites
- make sure that you have followed the angular.io/guide/quickstart

## Starting up the Project
```sh
ng new my-app
```
go to your app's directory and run
```sh
ng serve --open
```

## Dependencies

### Styling up your Project
- getbootstrap.com
- fontawesome.com [Cheatsheet](https://fontawesome.com/cheatsheet)

### Pipes
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