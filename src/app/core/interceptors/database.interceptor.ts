import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
//import { PwaService } from '@shared/services/pwa.service';



@Injectable()
export class DatabaseInterceptor implements HttpInterceptor {

    onlyMethods = ['POST', 'PUT', 'PATCH']

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((e: HttpErrorResponse) => {
                if (e instanceof HttpErrorResponse) {
                    // Comprobar si el metodo http cumple con los métodos declarado arriba
                    const supportedMethod = this.onlyMethods.includes(req.method)
                    if (supportedMethod) {

                        // Captura del endpoint
                        const apiUrl = req.url;

                        // Captura del cuerpo que se está enviando
                        const body = req.body;

                    }

                }
                return throwError(e);
            })
        );
    }
}