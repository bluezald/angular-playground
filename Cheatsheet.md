# Cheatsheet
- Workflow Tips in Angular Development
- this is a cheatsheet for web-app development, from common dependencies use in most applications, testing and workflow

## Upgrading Angular to latest version

- you can simply use
```sh
npm install -g angular-cli # - if its your first time
npm install -g @angular/cli@latest # - if u already installed, so for updating
```
- References:
    - https://stackoverflow.com/questions/43931986/how-to-upgrade-angular-cli-to-the-latest-version

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

### Notes
```sh
npm install xyz --save-dev
# The above command will save the dependency under devDependencies section of your package.json

npm install xyz --save
# dependencies section

# if no flag is specified, it won't add in the package.json file
```
### Common Dependencies
- @angular/material
- getbootstrap.com
- fontawesome.com [Cheatsheet](https://fontawesome.com/cheatsheet)
```
npm i font-awesome-icons --save
npm i mdbootstrap --save
npm install bootstrap
```
- make sure to add in the angular.json the css and js, like this:
```json
"styles": [
    "node_modules/mdbootstrap/css/bootstrap.min.css",
    "node_modules/mdbootstrap/css/mdb.min.css",
    "src/styles.css"
],
"scripts": [
    "node_modules/mdbootstrap/js/jquery-3.3.1.min.js",
    "node_modules/mdbootstrap/js/bootstrap.min.js",
    "node_modules/mdbootstrap/js/mdb.min.js"
]
```
## Develop

- Usual flow when creating a component
```
- generate a component
- add in module
- add a route to it
- update the html file
- define a service if needed
- define the functionality in the component.ts file
```

### Login
```
- create ui
- create validation
- create service + api
- error handling

```

- Coding convention link: https://angular.io/guide/styleguide#coding-conventions

### Organizing your Code
- use barrels in your imports. Create an index.ts file, and export all the components and services of that directory
- in case you encounter an [Uncaught Unexpected value 'undefined' declared by the module 'AppModule'](https://github.com/angular/angular-cli/issues/1831#)

```javascript
// index.ts
export * from './create-event/create-event.component';
export * from './events-list/events-list.component';
export * from './event-thumbnail/event-thumbnail.component';
export * from './event.service';
export * from './event-details/event-details.component';
export * from './event-route-activator.service';
export * from './events-list-resolver.service';
```
- then in your module, import the components and services like this
```javascript
import {
    CreateEventComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    EventRouteActivator,
    EventsListResolver
} from './events/index';
```
### Find and Replace
- Find and replace in Visual Studio Code using regex
```js
// Find: \{  *\w+ \}
// Replace: *

export { CourseModuleGuardService } from '../core/services/course-module-guard.service';
export { CourseModuleComponent } from './course-module/course-module.component';
export { CourseDetailComponent } from './course-detail/course-detail.component';
// This will replace it with this
export * from '../core/services/course-module-guard.service';
export * from './course-module/course-module.component';
export * from './course-detail/course-detail.component';
```


## Debugging
To be able to debug in the console (example in Chrome's console). Serve your application like this:
```sh
ng server -o --aot false #disable aot so that you can see the files as is
```
This is a [good article](https://medium.com/front-end-weekly/a-guide-to-debugging-angular-applications-5a36bd88b4cf) for tools to help in debugging

## Deployment

The generation of the changelog should happen automatically as the branch is merged into the master. The CI server should automatically create the changelog, commit it and push it to the remote git repository. This way the team doesn’t have to manage the versioning manually, except when a release should be marked as a major release. When doing this you simply specify the major number in package.json’s version property.
- [Source](https://christianlydemann.com/versioning-your-angular-app-automatically-with-standard-version/)

## SSR
- when adding `nguniversal` to an existing project, you may encounter a problem about: `Not found contents for creating main.server.ts`
- what worked for me was to edit the 2 files: `ts.config.server.json` and change `"src/main.server.ts` to just `"main.server.ts`
- https://github.com/angular/angular/issues/21516#issuecomment-525375342
