import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { ShowLoadingComponent } from '@stromberg/ui'
import { NgxPaginationModule } from 'ngx-pagination'
import { environment } from '../environments/environment'

import { AppComponent } from './app.component'
import { EpisodeDetailComponent } from './episodes/episode-detail/episode-detail.component'
import { EpisodesListComponent } from './episodes/episodes-list/episodes-list.component'
import { EpisodesComponent } from './episodes/episodes.component'
import { HomeComponent } from './home/home.component'
import { ApiInterceptor } from './interceptors/api-interceptor'

const routes: Routes = [
  { path: 'episodes/:id', component: EpisodesComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  declarations: [AppComponent, HomeComponent, EpisodesListComponent, EpisodesComponent, EpisodeDetailComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule, ShowLoadingComponent, NgxPaginationModule],
  providers: [
    { provide: 'API_BASE_URL', useValue: environment.apiBaseUrl },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
