import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { IUser } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    currentUser: IUser;

    constructor(
        private router: Router,
        private http: HttpClient) { }

    login(email: string, password: string) {
        const user = {
        email: email,
        password: password };
        return this.http.post(`${environment.baseUrl}/authentication`, user)
                .pipe(
                    map( token => {
                    if (token) {
                        localStorage.setItem('accessToken', token.accessToken);
                    }
                    } )
                );
    }

    logout() {
        localStorage.removeItem('accessToken');
        this.router.navigate(['/home']);
    }

    getUserDetails() {
        const httpOptions = {
        headers: new HttpHeaders({
            'Authorization': localStorage.getItem('accessToken')
        })
        };
        return this.http.get(`${environment.baseUrl}/user`, httpOptions)
                .pipe(
                    map( details => {
                    const user = details.data[0];
                    if (user) {
                        localStorage.setItem('currentUser', JSON.stringify(user));
                    }

                    return user;
                    } )
                );
    }
}
