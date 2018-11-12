import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseFromClient } from '../shared/responseFromClient';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendCsvService {

  constructor(private rest: Restangular) { }

  sendFile(fd: FormData): Observable<ResponseFromClient> {
    //const headers = new HttpHeaders().set('Content-Type', 'text/plain;charset=UTF-8');

    return this.rest.all('csvupload/uploadfile').post(fd);
    //return JSON.stringify(temp); .pipe(catchError((error: any) => {return throwError(error.error)}))
  }

  test(): Observable<string[]>{
    return this.rest.all('csvupload/getInfo').getList();
  }

}
