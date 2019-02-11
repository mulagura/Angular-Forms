import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { User } from './user';

import { catchError } from 'rxjs/operators';
import{ throwError } from 'rxjs';
import{ HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AppService {

    public _url: string = 'http://localhost:3000/enroll';

    constructor(private _http: HttpClient) { }

    enroll(user: User) {
        return this._http.post<any>(this._url, user)
        .pipe(catchError(this.errorhandler));
    }

    errorhandler(error:HttpErrorResponse){
        return throwError(error)
    }
}
