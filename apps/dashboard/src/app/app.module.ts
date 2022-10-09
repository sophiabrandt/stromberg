import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { EpisodesListComponent } from './episodes/episodes-list/episodes-list.component'
import { HomeComponent } from './home/home.component'
import { EpisodesComponent } from './episodes/episodes.component'
import { EpisodeDetailComponent } from './episodes/episode-detail/episode-detail.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  declarations: [AppComponent, HomeComponent, EpisodesListComponent, EpisodesComponent, EpisodeDetailComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
