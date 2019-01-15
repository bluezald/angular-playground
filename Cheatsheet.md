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

## Deployment

The generation of the changelog should happen automatically as the branch is merged into the master. The CI server should automatically create the changelog, commit it and push it to the remote git repository. This way the team doesn’t have to manage the versioning manually, except when a release should be marked as a major release. When doing this you simply specify the major number in package.json’s version property.
- [Source](https://christianlydemann.com/versioning-your-angular-app-automatically-with-standard-version/)
