import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`) ),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted hero id=${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()) { return of([]); }

    const url = `${this.heroesUrl}/?name=${term}`
    return this.http.get<Hero[]>(url)
      .pipe(
        tap(_ => this.log(`found heroes matching "${term}"`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO:send the error to remote logging infrastructure
      console.error(error);
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}