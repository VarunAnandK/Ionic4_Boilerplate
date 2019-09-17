import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonHelper } from './CommonHelper';

@Injectable()
export class AlphaInterceptor implements HttpInterceptor {
  constructor(private helper: CommonHelper) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // var token = this.helper.GetCurentUser().api_token;
    request = request.clone({
      setHeaders: {
        //Authorization: `${token}`
        'Content-Type' : 'application/json'
      }
    });

    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
          }
        },
        error => {
          if (event instanceof HttpResponse) {
            this.helper.ErrorToastr("please check internet connection and try again","network error")
          }
        }
      )
    );
  }
}
