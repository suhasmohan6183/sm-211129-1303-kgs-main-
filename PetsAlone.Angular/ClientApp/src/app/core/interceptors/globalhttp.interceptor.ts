import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EMPTY, empty, Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return <any>next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401 || error.status == 402) {
          return this.router.navigateByUrl("/unauthorized");
        } else {
          throwError(error);
        } 
      })
    );
    }


}
