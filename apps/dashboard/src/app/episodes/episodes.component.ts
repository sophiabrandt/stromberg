import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Episode, HttpRequestState } from '@stromberg/api-interfaces'
import { DefaultEpisodesFacadeService } from '@stromberg/episodes'
import { catchError, map, Observable, of, startWith } from 'rxjs'

@Component({
  selector: 'stromberg-episode',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesComponent {
  readonly episodesDataState$: Observable<HttpRequestState<Episode[]>> = this.episodesFacade.getAll().pipe(
    map((value) => ({ isLoading: false, value })),
    catchError((error) => of({ isLoading: false, error })),
    startWith({ isLoading: true }),
  )

  readonly selectedEpisode$: Observable<Episode | null> = this.episodesFacade.selectedEpisode$

  constructor(private episodesFacade: DefaultEpisodesFacadeService) {}

  selectEpisode(episode: Episode) {
    this.episodesFacade.selectEpisode(episode)
  }
}
