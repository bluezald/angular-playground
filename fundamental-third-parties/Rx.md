# Rx - Reactive

## Observable

### Operators
- [Operators](https://github.com/ReactiveX/rxjs/blob/master/doc/operators.md) are methods on the Observable type, such as .map(...), .filter(...), .merge(...), etc. When called, they do not change the existing Observable instance. Instead, they return a new Observable, whose subscription logic is based on the first Observable.
- An Operator is a function which creates a new Observable based on the current Observable. This is a pure operation: the previous Observable stays unmodified.

### Combination Operators

#### forkJoin
- This operator is best used when you have a group of observables and only care about the final emitted value of each. One common use case for this is if you wish to issue multiple requests on page load (or some other event) and only want to take action when a response has been received for all. In this way it is similar to how you might use Promise.all.

```js
// RxJS v6+
import { delay, catchError } from 'rxjs/operators';
import { forkJoin, of, throwError } from 'rxjs';

/*
  when all observables complete, give the last
  emitted value from each as an array
*/
const example = forkJoin(
  //emit 'Hello' immediately
  of('Hello'),
  //emit 'World' after 1 second
  of('World').pipe(delay(1000)),
  // throw error
  _throw('This will error')
).pipe(catchError(error => of(error)));
//output: 'This will Error'
const subscribe = example.subscribe(val => console.log(val));

```

#### merge
- turn multiple observables into a single observable

```js
import { mapTo } from 'rxjs/operators';
import { interval, merge } from 'rxjs';

//emit every 2.5 seconds
const first = interval(2500);
//emit every 2 seconds
const second = interval(2000);
//emit every 1.5 seconds
const third = interval(1500);
//emit every 1 second
const fourth = interval(1000);

//emit outputs from one observable
const example = merge(
  first.pipe(mapTo('FIRST!')),
  second.pipe(mapTo('SECOND!')),
  third.pipe(mapTo('THIRD')),
  fourth.pipe(mapTo('FOURTH'))
);
//output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
const subscribe = example.subscribe(val => console.log(val));
```

### Creation Operators

#### ajax()
- Create an observable for an Ajax request with either a request object with url, headers, etc or a string for a URL.
```js
import { ajax } from 'rxjs/ajax';

const githubUsers = `https://api.github.com/users?per_page=2`;

const users = ajax(githubUsers)

const subscribe = users.subscribe(
    res => console.log(res),
    err => console.error(err)
);
```

#### create()
-

#### defer()
- to postpone

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

### Conditional and Boolean Operators

#### takeuntil
- The TakeUntil subscribes and begins mirroring the source Observable. It also monitors a second Observable that you provide. If this second Observable emits an item or sends a termination notification, the Observable returned by TakeUntil stops mirroring the source Observable and terminates.
- The takeUntil() solution is great but unfortunately it comes also with a couple of disadvantages
Most obviously, it’s quite verbose ! We have to create additional Subject and correctly implement OnDestroy interface in every component of our application which is quite a lot!


### Utility

#### tap()
- Transparently perform actions or side-effects, such as logging.
- One usage I had with this when trying to extract another object inside the returned observable
```javascript
this.apiService.getThisObject(id)
    .pipe(
    tap( (anObject: any) => {
        this.innerObject = anObject.innerObject;
    })
    )
    .subscribe(
    data => {
        this.mainObject = data;
    }
    );
```

## Important Notes:

- One of the most often mistakes people make is when people take data out of an observable to send it to another observable.
- Observables do not like being inside Observables.
- Observable is kept alive until it completes.
- https://scotch.io/tutorials/3-ways-to-pass-async-data-to-angular-2-child-components
- .subscribe() - "Memory Leak"
- Subscribing to an observable yields us Subscription object which has an unsubscribe() method. This method can be used to remove the subscription when we no longer need it.
```js
export class AppCompoment implements OnInit, OnDestroy {
    private subscription: Subscription;

    ngOnInit() {
        this.subscription = this.service
            .subscribe();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
```
- In general it is best to use | async pipe to subscribe and unwrap values in the component templates (with help of <ng-container> element)

#### Some Useful Resources:
https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511