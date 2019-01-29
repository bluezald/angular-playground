# Rx - Reactive

## Observable

### map()
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