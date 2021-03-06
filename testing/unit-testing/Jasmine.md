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

#### HttpTestingController
- Controller to be injected into tests, that allows for mocking and flushing of requests.


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

## HTML/DOM
### Check Text Content
```js
it('should be display 404', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('404');
});
```

## Services

### API/HTTP
```js
describe('getItems()', () => {
    it('- should return an Observable<Item[]>', () => {
        const dummyItems = mockItems; // from external source

        service.getItems().subscribe(items => {
            expect(items.length).toBe(10);
        });

        const req = httpMock.expectOne(`${environment.url}/items`);
        expect(req.request.method).toBe('GET');
        req.flush(mockItems);
    });
});
```
- You can use the HttpTestingController to mock requests and the flush method to provide dummy values as responses. As the HTTP request methods return an Observable, we subscribe to it and create our expectations in the callback methods

# General Notes
- to be organized appropriately
```js
// When importing ToastrModule in Unit tests, make sure to call in forRoot() as well
imports: [ ToastrModule.forRoot() ]
// The forRoot method provides 4 "services": TOAST_CONFIG (InjectionToken), OverlayContainer, Overlay, and ToastrService. All are required for toasts to work propertly. (https://github.com/scttcper/ngx-toastr/issues/339)
```

## Common Error in Unit Testing with Karma
```
ailed: Unexpected value 'XYZ' imported by the module 'DynamicTestModule'. Please add a @NgModule annotation.
```
- The compilation error you get is thrown when you try to include something other than a component, directive, or pipe in the declarations array. Sometimes we get confuse, Services should be in providers, imports for modules and declaration for components