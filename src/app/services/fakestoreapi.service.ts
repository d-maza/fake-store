import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { FakeStoreResponse } from '../models/fakeStore';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreApiService {

  http = inject(HttpClient);
  urlBase = new URL('https://fakestoreapi.com/products');

  getProducts(): Observable<FakeStoreResponse[]>{
    return this.http.get<FakeStoreResponse[]>(this.urlBase.href).pipe(catchError(this.handelError));
  }

  handelError(error: HttpErrorResponse) {
    return throwError(()=> new Error (error.message+ ' '+ error.status));
  }
}

