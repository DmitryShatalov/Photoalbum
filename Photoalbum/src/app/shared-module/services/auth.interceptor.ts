import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

export class AuthInterceptor implements HttpInterceptor{ 

    intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
        if (localStorage.getItem('token') != undefined) {
            return next.handle(req.clone({
                setHeaders: {
                    authorization: "Basic " + JSON.parse(localStorage.getItem('token'))
                }
            }));
        }
        else {
            return next.handle(req);
        }
    }
      
}
  