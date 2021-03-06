# Notes
- AngularJS refers to the javascript code of Angular which are the versions 1.x and Angular refers to the newer version of Angular. And uses Typescript.
- Typescript is a superset of javascript, and it outputs javascript code thru transpilation. (Syntactic sugar)

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
- Schematics is a workflow tool for the modern web; it can apply transforms to your project, such as create a new component, or updating your code to fix breaking changes in a dependency. Or maybe you want to add a new configuration option or framework to an existing project.
- Decorators are functions that modify JavaScript classes. Angular defines a number of decorators that attach specific kinds of metadata to classes, so that the system knows what those classes mean and how they should work.

```
// The compilation flow when starting angular project
angular.json -> main.ts -> AppModule (main root module) -> Main Component
```
- the reason you're able to do this:
```javascript
imageUrl: '/assets/images/angularconnect-shield.png'
```
is because in your angular.json, by default, you have declared an assets variable relative to your angular.json
```json
"assets": [ "src/favicon.ico",
            "src/assets"]
```

## package.json
- when installing npm packages make sure to know that, it's important to version manage your dependencies, because, a slight change can break your build.

In the simplest terms, the tilde matches the most recent minor version (the middle number). ~1.2.3 will match all 1.2.x versions but will miss 1.3.0.
The caret, on the other hand, is more relaxed. It will update you to the most recent major version (the first number). ^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.
[Learn more](https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json)

## PWA and Service Workers

### App Shell Model
- The app "shell" is the minimal HTML, CSS and JavaScript required to power the user interface and when cached offline
- An application shell architecture makes the most sense for apps and sites with relatively unchanging navigation but changing content.

- References:
    - https://developers.google.com/web/fundamentals/architecture/app-shell

### ngsw-worker.js
- the Angular Service Worker itself

### ngsw

# Angular CLI

- Installing CLI
    - needs node 8.x or higher
    - npm 5.x or higher
```sh
npm i -g @angular/cli
```
### New
- Generating a Project/App - with a set prefix for the components
```sh
ng new my-app --prefix bin #sets the prefix to bin-root, or bin-*
```
- Tip for creating a project
```sh
ng new my-app --routing --prefix xyz # Add the routing on first generate
```

- The Angular CLI generates code from blueprints
- Basic blueprints we can generate
```sh
ng generate component customer
ng generate service customer-data
ng generate class customer-model
```

### Components
- Installing component
```sh
ng g c About  # ng (Angular) generate component About
```
or
```sh
ng generate component componentName
```

### Directive
- Generate a Directive
```sh
ng generate directive search-box --flat false
```
- you can use the flag **--flat** to add the newly generated blueprint to its own folder or not.

### Service
- Creating Service
```sh
ng generate service
```
- services are app-scoped, which means that they can be accessed from every module.

### Classes, Interfaces and Enums
```sh
ng g cl models/customer #generates a class
ng g i models/person #generates an interface
ng g e models/gender #generates enums
```

### Pipes
```sh
n g p shared/init-caps #generates a pipe called init-caps in shared folder
#ng generate pipe shared/pipe-name
```

### Module
- Creating Module
```sh
ng g m /products/product --flat -m app.module # generate a product module in the app module
```
- when you add in the **-m** flag, it specifies which module the newly generated module will be put into

- Adding a routing module to an existing module called xyz
```
ng g m xyz-routing --module xyz --flat
```

### Generating Routing Features
- you can specify to add in routing module when you create a module through the **--routing** flag

### Building and Serving
- Exploring the source in the output
```sh
npm i webpack-bundle-analyzer --save-dev
ng build --stats-json
npx webpack-bundle-analyzer dist/my-app/stats.json # You can add this in your scripts in package.json like "npm start stats"
```
or
```sh
npm i source-map-explorer --save-dev
ng build
npx source-map-explorer dist/my-app/main.js
```
You can use this to check on the file size of your bundles and optimize accordingly

***
**Environment** indicates which file to use between environment.prod.ts and environment.ts
and **Target** defines how (and if) the files are optimized


Feature | ng build | ng build --prod | Options
---------|----------|---------|---------
Environment| environment.ts | environment.prod.ts
Cache-busting| only images referenced in css | all build files
Source maps | generated | not generated | --source-map
Extracted CSS | global CSS output to .js | yes, to css file(s)
Uglification | no | yes
Tree-Shaking | no | yes
AOT | no | yes | --aot

***
Common ng serve Options
Options | Description
--------|-------------
--open | Opens the default browser
--port | Port to listen to when serving
--live-reload | Reload when changes occur
--ssl | Serve using HTTPs
--proxy-config | Proxy configuration file

### Adding new Capabilities
```sh
ng add @angular/pwa
ng add @angular/material
ng add @angular/elements
ng add @ng-bootstrap/schematics
```

### Testing
```sh
ng test
# you can also add in code coverage thru
ng test --code-coverage
```
- The spec files are unit tests for your source files. The convention for Angular applications is to have a .spec.ts file for each .ts file. They are run using the Jasmine javascript test framework through the Karma task runner when you use the ng test command.

### E2E Tests
```sh
ng e2e
```

### Key Angular CLI Commands
- ng help
- ng new my-app // generates a new app
- ng serve
- ng generate
- ng test
- ng e2e
- ng build

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

#### Compiler
- Just-in-Time (JIT), which compiles your app in the browser at runtime.
- Ahead-of-Time (AOT), which compiles your app at build time.

#### How AOT Works
- Phases:
    - Phase 1: Code Analysis - (Expression Syntax limitations, no Arrow Functions and Code Folding)
    - Phase 2: Code Generation
    - Phase 3: Template Type Checking - Angular template compiler uses the TypeScript compiler to validate the binding expressions in templates

- **Code Folding** - For example, the collector can evaluate the expression 1 + 2 + 3 + 4 and replace it with the result, 10. This process is called folding. An expression that can be reduced in this manner is foldable.

- When you use AoT compilation, you can control how your application is compiled by specifying template compiler options in the tsconfig.json TypeScript configuration file.

## Decorator
- function that adds metadata to a class, its members or its method arguments
- Prefixed with an @

## Binding

```html
<h1>{{pageTitle}}</h1> <!-- template expression -->
```
- One way binding - from component class property to an element property

### Property Binding
Property binding lets you interpolate values that are computed from your application data into the HTML.
```html
<img [src]='product.imageUrl'>
```
### Event Binding
Event binding lets your app respond to user input in the target environment by updating your application data.
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
- also make sure you import FormsModule in your Module
- parentheses are used to bind in the HTML to component direction and typically used in responding to events
- The square brackets are used to bind from component to HTML, and used for displaying data

```javascript
import { FormsModule } from '@angular/forms';
```
### Passing Parameters to Child Components
```javascript
// Add the @Input Decorator
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-location',
    template: `
    <div>
        <span>Location: {{location.address}}</span>
        <span>&nbsp;</span>
        <span>{{location.city}}, {{location.country}}</span>
    </div>
    `
})
export class LocationComponent {
    @Input() location: any;
}
// Usage:
// example you have an event object with location object in it
<app-location [location]=event.location></app-location>
```
### Handling Events from Child Component to Parent Component
In your Child component you have:
```javascript
// Javascript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './event-thumbnail.component.html'
})
export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();

    @Output handleClickMe(): void {
        this.eventClick.emit('foo');
    }
}
```
And in your component's html:
```html
<button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
```
In your Parent component you handle it like this:
```javascript
import { Component } from '@angular/core';

// other code here...

export class EventsListComponent {
    handleEventClicked(data) {
        console.log(data);
    }
}
```
And in your component's html:
```html
<!-- Assuming that the event's list component has event thumbnail components in it -->
<app-event-thumbnail (eventClick)=handleEventClicked($event) [event]=event1></app-event-thumbnail>
```
### Template Variables
```html
<!-- You set a variable to the component using the # -->
<app-event-thumbnail #thumbnail [event]=event1></app-event-thumbnail>
<!-- Here we have the #thumbnail as an event thumbnail component variable, thus we can call methods of an event thumbnail component -->

<!-- Sample usage here, of the template variable -->
<button class="btn btn-primary" (click)=thumbnail.logFoo()>Log me some foo</button>
```
```javascript
// Example EventThumbnailComponent

// other code ...
export class EventThumbnailComponent {
    @Input() event: any;

    logFoo() {
        console.log('fooooo');
    }
}
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
- ***ngFor** - the asterisk indicates that this is a structural directive - Structural Directive changes the shape of the DOM

### *ngSwitch and *ngClass
- *ngClass is a conditional setting for a css class to be applied in an element. In this example:
```html
<div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
    Time: {{event?.time}}
    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
</div>
```
and in your component class you can define a function that will determine the class of your element
```javascript
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .green { color: #55efc4 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart};
    }
}
```
- You can also use ***ngStyle**
```html
<div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
```
and in your js:
```javascript
getStartTimeStyle() {
    if (this.event && this.event.time === '8:00 am') {
        return {'color': '#55efc4', 'font-weight': 'bold'};
    }
    return {};
}
```

## Interfaces
```javascript
export interface IProduct {

}
```

## Lifecycle Hooks
- OnInit interface

## Services
- a class with a focused purpose
- applied using the dependency injection
- add the @Injectable decorator
- defines a business logic in a separate file, and inject a service whenever we need it
- When injecting a service you add it in the constructor of the component

### Constructor
- it's not a good practice to add in long-running code inside your constructor
```javascript
constructor(private eventService: EventService) {}

// is a shorthand for this:
export class EventsListComponent {
    private eventService: EventService;
    constructor(private eventService: EventService) {
        this.eventService = eventService;
    }
}
```
### Wrapping Third Party in a Service
- You do this so that you won't declare the third-party as a global object and so that it can be testable. That's why it's advised to wrap your third-party around to a service
```javascript
import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {
    success(message: string, title?: string) {
        toastr.success(message, title);
    }

    info(message: string, title?: string) {
        toastr.info(message, title);
    }

    warning(message: string, title?: string) {
        toastr.warning(message, title);
    }

    error(message: string, title?: string) {
        toastr.error(message, title);
    }
}

// Then make sure to import the service also in the providers array of your module
```

## Observables and other Reactive Extensions
- by convention, add a dollar sign after an observable variable like: ```source$```
- and observable won't start emitting until there's a subscriber

### Promises vs Observable
- Promise provides a single future value, observable emits multiple values over time.
- Promise is not lazy, Observable is lazy
- Promise is cancellable, Observable is cancellable
- Observable supports map, filter, reduce and more.

### Module
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
    providers: [ // Services
        EventService
    ],
    bootstrap: [AppComponent]
})
```
- declarations—this application's lone component.
- imports—import BrowserModule to have browser specific services such as DOM rendering, sanitization, and location.
- providers—the service providers.
- bootstrap—the root component that Angular creates and inserts into the index.html host web page.
***
- The code difference between the main app module vs a feature module:
```javascript
// App Module
imports: [
    BrowserModule,
    RouterModule.forRoot()
]
// Feature Module
imports: [
    CommonModule,
    RouterModule.forChild()
]
```
#### SharedModule
```
SharedModule is a conventional name for an NgModule with the components, directives, and pipes that you use everywhere in your app. This module should consist entirely of declarations, most of them exported.
The SharedModule may re-export other widget modules, such as CommonModule, FormsModule, and NgModules with the UI controls that you use most widely.
The SharedModule should not have providers for reasons explained previously. Nor should any of its imported or re-exported modules have providers.
Import the SharedModule in your feature modules, both those loaded when the app starts and those you lazy load later.
```
#### CoreModule
```
CoreModule is a conventional name for an NgModule with providers for the singleton services you load when the application starts.
Import CoreModule in the root AppModule only. Never import CoreModule in any other module.

- Consider making CoreModule a pure services module with no declarations.
- every lazy module has its own injector! What that means is that a service provided in a lazy module is only accessible in that module. But it can still access the services previously provided by non-lazy modules (such as AppModule)!

For more information, see Sharing NgModules and Singleton Services.
```
#### Feature Modules
```
Feature modules are modules you create around specific application business domains, user workflows, and utility collections. They support your app by containing a particular feature, such as routes, services, widgets, etc. To conceptualize what a feature module might be in your app, consider that if you would put the files related to a certain functionality, like a search, in one folder, that the contents of that folder would be a feature module that you might call your SearchModule. It would contain all of the components, routing, and templates that would make up the search functionality.
```

### Subscribing to an Observable
```javascript
x.subscribe(nextFn)
x.subscribe(nextFn, errorFn)
x.subscribe(nextFn, errorFn, completeFn)
```
***

## Navigation and Routing
- configure a route for each component
- define options/actions
- Tie a route to each option/action

#### Configuring Routes
- before we can navigate to a route, we need to ensure that the routes are available in the application.
We do this by passing the routes to the RouterModule like this:
```javascript
@NgModule({
    imports: [
        // Other Modules
        RouterModule.forRoot([])
    ]
})
// If you want to use hash style routes:
RouterModule.forRoot([], { usehash: true })
```
- Creating Routes
```javascript
[
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    // the /:id - is a parameter
    { path: 'welcome', component: WelcomeComponent },
    { path: 'heroes', component: HeroListComponent, data: { title: 'Heroes List' }},
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    // redirect to another path - this is a default route
    { path: '**', component: PageNotFoundComponent }
    // wildcard route when there's no other route matched from the defined routes
    // also make sure you define the routes from specific to
    // less specific cause the order matters
]
```
- pathMatch - (prefix | full) - prefix means redirect if the URL starts with the specified path. And full if it fully matches.
- The routerLink directive always treats the provided link as a delta to the current URL:
- The data property in the fourth route is a place to store arbitrary data associated with this specific route. The data property is accessible within each activated route. **Use it to store items such as page titles, breadcrumb text, and other read-only, static data**

- Passing Parameters to a Route
```javascript
<a [routerLink] = "['/products', product.productId]">{{product.productName}}</a>
// you pass in the router link, the route, and the parameters
```
- When using routerLink directive, make sure RouterModule is in the imports of the module using it.

- to read the parameters in your code you use:
```javascript
import { ActivatedRoute } from '@angular/router';
constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
}
```
- there are 2 ways to get the parameter. You can either get an observable or a snapshot of the variable. Use the snapshot if you only need the initial value of the parameter
- Activating Route with Code
```javascript
onBack(): void {
    this.router.navigate(['/products']);
}

// With params
this.router.navigate(['/root/child', crisis.id]);
// With query params
this.router.navigate(['/product-list'], { queryParams: { page: pageNum } });
```
- you can add ```skipLocationChange: true ``` to not change the url in the address bar
```html
<!-- in html -->
<a [routerLink]="['/item', params]" [queryParams]="{ id: item.id }" skipLocationChange>
```

### Route Guards
- use to guard in routing, like when you try to transfer to another page

- CanActivate - guard navigation to a route
- CanDeactivate - guard navigation from a route
- Resolve - pre-fetch data before activating a route
- canLoad - prevent asynchronous routing

- Building a Guard Class
```javascript
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
    canActivate(): boolean {
        //...
    }
}
```
- To use the guard, you add it when you add in the routes
```javascript
{ path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }
```
- generate guard using the cli
```sh
ng g g guardName
```
#### Not using a Guard Service
```javascript
// add a string for the key of your guard function
{ path: 'events/create', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] }

// And in your app module, add in your providers:
providers: [
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
    // btw, this is the long-hand notation of adding a provider in the array
]

// and the useValue here is the function that you gonna use for the guard.
// You can define it somewhere.
```
- canDeactivate function will pass in a parameter the component. So you can gain access to its properties, and decide how to deactivate base on the properties it has

### Resolver
- is that intermediate code, which can be executed when a link has been clicked and before a component is loaded.
- an Interface that class can implement to be a data provider.
```javascript
@Injectable()
class TeamResolver implements Resolve<Team> {
    constructor(private backend: Backend) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> | Promise<any> {
        return this.backend.fetchTeam(route.params.id);
    }
}
```

## Forms
- **Reactive forms** are more robust: they're more scalable, reusable, and testable. <mark>If forms are a key part of your application</mark>, or you're already using reactive patterns for building your application, use reactive forms.

- **Template-driven forms** are useful for adding a simple form to an app, such as an email list signup form. They're easy to add to an app, but they don't scale as well as reactive forms. If you have very basic form requirements and logic that can be managed solely in the template, use template-driven forms.

### Template-based Forms
```html
<h1>Login</h1>
<hr>
<div class="col-md-4">
    <form #loginForm="ngForm" (ngSubmit)="login(loginForm)" autocomplete="off" novalidate>
    <div class="form-group" >
        <label for="userName">User Name:</label>
        <em *ngIf="loginForm.controls.userName?.invalid && loginForm.controls.userName?.touched || mouseoverLogin">Required</em>
        <input (ngModel)="userName" name="userName" required id="userName" type="text" class="form-control" placeholder="User Name..." />
        </div>
        <div class="form-group" >
        <label for="password">Password:</label>
        <em *ngIf="loginForm.controls.password?.invalid && loginForm.controls.password?.touched || mouseoverLogin">Required</em>
        <input (ngModel)="password" name="password" required id="password" type="password" class="form-control"placeholder="Password..." />
        </div>

        <span (mouseenter)="mouseoverLogin=true" (mouseleave)="mouseoverLogin=false">
        <button type="submit" [disabled]="loginForm.invalid" class="btn btn-primary">Login</button>
        </span>
        <button type="button" (click)="cancel()" class="btn btn-default">Cancel</button>
    </form>
</div>
```

- if ever you encounter an error like this
```
Uncaught Error: Template parse errors:
There is no directive with "exportAs" set to "ngForm" ("
...
```
- make sure to add FormsModule in your AppModule
- You can use object binding in your forms like this, take note it will only group the properties into a flat object. To be able to have nested object, use the ```ngModelGroup="nestedObjectName"``` directive
```html

```


## Tooling Features
- Updating Angular
```sh
ng update
```
### Workspaces
- You can have multiple projects when working in Angular.
- Inside, for example on a project, you can generate a new sub-project using the:
```sh
ng generate application sub-app
```
### Libraries
```sh
ng generate library my-lib
```

# Tips and Tricks
- Decorators are new type of syntax
- Custom Pipes
- RxJS
- Use CLI
- Follow Style Guide
- Do sorting, filtering in your component
- Learn Typescript
- Learn Ngrx
- Learn webpack
- Use Lazy Loading
- Use VS Code
- Don't touch the DOM directly
- Versioning your App: https://christianlydemann.com/versioning-your-angular-app-automatically-with-standard-version/

***

- In VSCode, you can execute a shortcut structure for the html like this
```html
nav>ul>li*2>a[[routerLink]]
```
this will generate the following snippet when you press tab afterwards
```html
<nav>
    <ul>
        <li><a href="" [routerLink]=""></a></li>
        <li><a href="" [routerLink]=""></a></li>
    </ul>
</nav>
```
- to check for a guide when upgrading your project to a newer version of angular, check https://update.angular.io/

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

- The | async pipes automatically unsubscribes all active subscriptions when component is destroyed