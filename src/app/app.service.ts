import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable()
export class SampleService {
  url = 'https://jsonplaceholder.typicode.com/posts/9';

  constructor(private http: HttpClient) { }

  getSampleResponse(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.url, { observe: 'response' });
  }
}