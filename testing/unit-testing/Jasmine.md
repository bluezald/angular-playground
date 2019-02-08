# Angular Unit Testing
- The Angular CLI downloads and install everything you need to test an Angular application with the [Jasmine test framework](https://jasmine.github.io/).

> Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

#### ComponentFixture
- Fixture for debugging and testing a component
```js
let component: AppError404Component;
let fixture: ComponentFixture<AppError404Component>;

fixture = TestBed.createComponent(AppError404Component);

/// and you can get the instance of the component thru
component = fixture.componentInstance;
```


## Configurations

- When you get Karma no spec executed, add this in ```karma.conf.js.```
```ts
mime: {
    'text/x-typescript': ['ts', 'tsx']
}
```

## Snippets
- You can look into some sample code related to how to unit test [here](https://angular.io/guide/testing)

- TODO: will add in another directory if this grows up:

### Check Text Content
```js
it('should be display 404', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('404');
});
```