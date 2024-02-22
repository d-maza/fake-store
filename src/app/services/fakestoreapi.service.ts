import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../models/fakeStore';


@Injectable({
  providedIn: 'root'
})
export class FakeStoreApiService {

  http = inject(HttpClient);
  urlBase = new URL('https://fakestoreapi.com/products');

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlBase.href).pipe(catchError(this.handelError));
  }

  handelError(error: HttpErrorResponse) {
    return throwError(()=> new Error (error.message+ ' '+ error.status));
  }
}

