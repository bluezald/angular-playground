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
