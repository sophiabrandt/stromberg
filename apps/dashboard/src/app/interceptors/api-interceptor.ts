import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'

/**
 * Interceptor to set the API_BASE_URL to the configured API_BASE_URL from the environment files
 */
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(@Inject('API_BASE_URL') private baseUrl: string) {}

  intercept(req: HttpRequest<Request>, next: HttpHandler): Observable<HttpEvent<Request>> {
    if (req.url.startsWith('/api')) {
      const apiReq = req.clone({ url: `${this.baseUrl}${req.url}` })
      return next.handle(apiReq)
    } else {
      return next.handle(req)
    }
  }
}
