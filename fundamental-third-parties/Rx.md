# Rx - Reactive

## Observable

### map()
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