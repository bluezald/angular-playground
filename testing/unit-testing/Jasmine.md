# Angular Unit Testing
- The Angular CLI downloads and install everything you need to test an Angular application with the [Jasmine test framework](https://jasmine.github.io/).

> Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

## Notes

- When you get Karma no spec executed, add this in ```karma.conf.js.```
```ts
mime: {
    'text/x-typescript': ['ts', 'tsx']
}
```