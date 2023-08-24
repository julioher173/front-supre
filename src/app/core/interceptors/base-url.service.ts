import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseURLInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.includes('/assets/')) {
      return next.handle(req);
    } else {
      if (!req.url.match(/http/)) {
        const url = `${environment.api_url}${req.url}`.replace(
          /([^:]\/)\/+/g,
          '$1'
        );
        req = req.clone({ url });
      } else {
        let url = req.url;
        if (url[0] == '/') {
          url = url.substr(1);
        }
        req = req.clone({ url });
      }
    }
    return next.handle(req);
  }
}