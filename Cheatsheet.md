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

### Notes
```sh
npm install xyz --save-dev
# The above command will save the dependency under devDependencies section of your package.json

npm install xyz --save
# dependencies section

# if no flag is specified, it won't add in the package.json file
```

### Styling up your Project
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

### Organizing your Code
- use barrels in your imports. Create an index.ts file, and export all the components and services of that directory

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

## Debugging
To be able to debug in the console (example in Chrome's console). Serve your application like this:
```sh
ng server -o --aot false #disable aot so that you can see the files as is
```

## Deployment

The generation of the changelog should happen automatically as the branch is merged into the master. The CI server should automatically create the changelog, commit it and push it to the remote git repository. This way the team doesn’t have to manage the versioning manually, except when a release should be marked as a major release. When doing this you simply specify the major number in package.json’s version property.
- [Source](https://christianlydemann.com/versioning-your-angular-app-automatically-with-standard-version/)
