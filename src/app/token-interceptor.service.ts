import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService,SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private localStorage: LocalStorageService, private sessionStorageService: SessionStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('http interceptor .....');
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + 'xxyyzz')
      }
    )
    return next.handle(tokenizedReq);
  }


}
