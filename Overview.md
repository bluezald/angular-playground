# Notes
- AngularJS refers to the javascript code of Angular which are the versions 1.x and Angular refers to the newer version of Angular. And uses Typescript.

### Universal Benefits
- Reduction of Cost in building an application
- Standards compliance

### Basic Features
- PWA (Progressve Web Apps)
- Lazy Loading
- Forms
- RxJS
- Fully Featured Router
- Animations

### Advanced Features
- Server Side Rendering
- Mobile
- Angular Language Service
- ngUpgrade - upgrades/migrates an Angular project to a newer version

## Architecture
- One Way Data Flow
- Dependency Injection
- Components
- Directives - add new capabilities to an element
- Templates - the html/view file
- Zone.js & Change Detection - Zone.js creates a wrapper to all asynchronous operations in the browser
- Rendering Targets
    - Browser/DOM
    - Server-side
    - Native Mobile Apps
    - Native Destop Apps

## Angular CLI
- Installing component
```sh
ng g c About  # ng (Angular) generate component About
```
or
```sh
ng generate component componentName
```
- Creating Service
```sh
ng generate service
```
### Server-Side Rendering
- reduces the initial download size
- reduces render time
- SEO

### Testing Tools
- Karma
- Protractor
- Others: Jest, TheIntern, Cypress.io
- TestBed
- MockBackend

### AOT Compiler (Ahead of Time Compiler)
- compiler converts your Angular HTML and TypeScript code into efficient JavaScript code during the build phase before the browser downloads and runs that code. Compiling your application during the build process provides a faster rendering in the browser.

## Tips, Tricks and Gotchas
- Decorators are new type of syntax
- Custom Pipes
- RxJS

### Tips
- Use CLI
- Follow Style Guide
- Do sorting, filtering in your component
- Learn Typescript
- Learn Ngrx
- Learn webpack
- Use Lazy Loading
- Use VS Code
- Don't touch the DOM directly

***

## Decorator
- function that adds metadata to a class, its members or its method arguments
- Prefixed with an @


## Binding

```html
<h1>{{pageTitle}}</h1> <!-- template expression -->
```
- One way binding - from component class property to an element property

### Property Binding
```html
<img [src]='product.imageUrl'>
```
### Event Binding
```html
<button class='btn btn-primary' (click)='toggleImage()'>
    Show Image
</button>
```
### Two-way Binding
- known as banana in a box **[()]**
```html
<input [(ngModel)]='listFilter'>
```
- also make sure you import FormsModule in your AppModule
```javascript
import { FormsModule } from '@angular/forms';
```
### Getters and Setters
- if you need to perform additional operation when a property is modified, you can use Two-Way Binding with getters and setters
```javascript
_listFilter: string;
get listFilter(): string {
    return this._listFilter;
}
set listFilter(value: string) {
    this._listFilter = value;
}
```

## Directives
### for...of vs for...in
- **for...of** iterates over the iterable objects, such as an array
- **for...in** iterates over the properties of an object

## Interface
```javascript
export interface IProduct {

}
```
## Lifecycle Hook
- OnInit interface

## Service
- a class with a focused purpose
- applied using the dependency injection
- add the @Injectable decorator

## Observables and other Reactive Extensions
- by convention, add a dollar sign after an observable variable like: ```source$```
- and observable won't start emitting until there's a subscriber

### Promises vs Observable
- Promise provides a single future value, observable emits multiple values over time.
- Promise is not lazy, Observable is lazy
- Promise is cancellable, Observable is cancellable
- Observable supports map, filter, reduce and more.

### AppModule
```javascript
@NgModule({
    declarations: [ // Use specific to this module
        AppComponent,
        ProductListComponent,
        ConvertToSpacesPipe,
        StarComponent
    ],
    imports: [ // external modules
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
```
### Subscribing to an Observable
```javascript
x.subscribe(nextFn)
x.subscribe(nextFn, errorFn)
x.subscribe(nextFn, errorFn, completeFn)
```

# Checklists

## Component: Class
- Use PascalCasing
- Append Component to the name
- export keyword
- camelCase for the properties
- camelCase for the methods

## Component: Metadata
- Prefix with @; Suffix with ()

## Data Binding:
- Interpolation: {{pageTitle}}
- Property Binding: <img [src]='product.imageUrl'>
- Event Binding: <button (click)='toggleImage()'>
- Two-Way Binding: <input [(ngModel)]='listFilter' />