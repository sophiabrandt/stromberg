import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Episode, HttpRequestState } from '@stromberg/api-interfaces'
import { EpisodesFacadeService } from '@stromberg/episodes'
import { ShowLoadingComponent } from '@stromberg/ui'
import { catchError, map, Observable, of, startWith } from 'rxjs'
import { EpisodesListComponent } from '../episodes/ui/episodes-list/episodes-list.component'

@Component({
  selector: 'stromberg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, EpisodesListComponent, ShowLoadingComponent],
})
export class HomeComponent {
  readonly episodesDataState$: Observable<HttpRequestState<Episode[]>> = this.episodesFacade.getAll().pipe(
    map((value) => ({ isLoading: false, value })),
    catchError((error) => of({ isLoading: false, error })),
    startWith({ isLoading: true }),
  )

  constructor(private episodesFacade: EpisodesFacadeService) {}
}
