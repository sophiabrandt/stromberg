import { NgOptimizedImage } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { EpisodesListComponent } from './episodes/episodes-list/episodes-list.component'
import { HomeComponent } from './home/home.component'
import { EpisodesComponent } from './episodes/episodes.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  declarations: [AppComponent, HomeComponent, EpisodesListComponent, EpisodesComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), NgOptimizedImage, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
