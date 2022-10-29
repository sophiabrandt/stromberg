import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { enableProdMode, importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router'
import { APP_ROUTES, AppComponent } from './app/app.component'
import { ApiInterceptor } from './app/shared/interceptors/api-interceptor'

import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    { provide: 'API_BASE_URL', useValue: environment.apiBaseUrl },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
})
  .then((p) => p)
  .catch((ex) => {
    throw new Error(`Could not bootstrap application: ${ex}`)
  })
