import { Injectable, NgModule } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HTTP_INTERCEPTORS, HttpErrorResponse   } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({ setHeaders: { Authorization: 'authToken' } });
    //console.log('inside interceptor');
    return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                  console.log(evt);
                }
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                  console.log(err);
                }
                return of(err);
            }));
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ]
})
export class AppInterceptorModule { }