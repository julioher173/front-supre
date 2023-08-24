import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
//import { AlertService } from '../../shared/services/common/alert.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error) => {
        let errorMessage = `Server-side error: ${error.status} ${error.message}`;

        switch (error.status) {
          case 401:
            //this.alert.toast('warning', 'La sesion ha expirado', '');
            break;
          default:
            if (error.error instanceof Blob) {
              let reader = new FileReader();
              reader.onload = () => {
                let json = JSON.parse(reader.result + '');
                if (json.msg || json.data) {
              //    this.alert.toast('error', json.msg, '');
                } else {
                  // this.alert.toast(
                  //   'error',
                  //   'Error',
                  //   'No se pudo conectar con el servidor'
                  // );
                }
              };

              reader.readAsText(error.error);
            } else {
              if (error.error.msg || error.error.data) {
               // this.alert.toast('error', error.error.msg, error.error.data);
              } else {
                // this.alert.toast(
                //   'error',
                //   'Error',
                //   'No se pudo conectar con el servidor'
                // );
              }
            }
        }

        return throwError(errorMessage);
      })
    );
  }
}