# Rx - Reactive

## Observable

### Operators
- [Operators](https://github.com/ReactiveX/rxjs/blob/master/doc/operators.md) are methods on the Observable type, such as .map(...), .filter(...), .merge(...), etc. When called, they do not change the existing Observable instance. Instead, they return a new Observable, whose subscription logic is based on the first Observable.
- An Operator is a function which creates a new Observable based on the current Observable. This is a pure operation: the previous Observable stays unmodified.

### Creation Operators


### Transformation Operators

#### map()
- transform the items emitted by an Observable by applying a function to each item.
- applies a function of your choosing to each item emitted by the source Observable, and returns an Observable that emits the results of these function applications.
```js
return this.http.post<IToken>(`${environment.baseUrl}/login`, user)
            .pipe(
            map( token => {
                if (token) {
                localStorage.setItem('token', token);
                }
            } )
            );
```

### Filtering Operators

#### filter()