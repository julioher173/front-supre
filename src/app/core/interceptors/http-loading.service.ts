import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
//import { AlertService } from '../../shared/services/common/alert.service';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            //if (!this.requestExceptions(req)) this.alert.close();
          }
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
           // this.alert.close();
          }
        }
      )
    );
  }

  private requestExceptions(req: any) {
    if (req.url.indexOf('/profesionales/foto') != -1) return true;
    if (req.method == 'POST') {
      return req.body?.noCloseLoading;
    } else {
      return false;
    }
  }
}