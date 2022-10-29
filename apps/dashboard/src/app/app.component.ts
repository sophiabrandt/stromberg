import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { Component } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { ShowLoadingComponent } from '@stromberg/ui'
import { NgxPaginationModule } from 'ngx-pagination'
import { environment } from '../environments/environment'
import { EpisodesComponent } from './episodes/episodes.component'
import { HomeComponent } from './home/home.component'
import { ApiInterceptor } from './shared/interceptors/api-interceptor'

export const APP_ROUTES: Routes = [
  { path: 'episodes/:id', component: EpisodesComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
]

@Component({
  selector: 'stromberg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  entryComponents: [],
  imports: [CommonModule, RouterModule, HttpClientModule, ShowLoadingComponent, NgxPaginationModule],
})
export class AppComponent {
  links = [
    { path: '/', title: 'home' },
    { path: '/episodes', title: 'episoden' },
  ]
}
