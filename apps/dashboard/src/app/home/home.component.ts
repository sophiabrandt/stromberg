import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Episode, HttpRequestState } from '@stromberg/api-interfaces'
import { EpisodesFacadeService } from '@stromberg/episodes'
import { catchError, map, Observable, of, startWith } from 'rxjs'

@Component({
  selector: 'stromberg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly episodesDataState$: Observable<HttpRequestState<Episode[]>> = this.episodesFacade.getAll().pipe(
    map((value) => ({ isLoading: false, value })),
    catchError((error) => of({ isLoading: false, error })),
    startWith({ isLoading: true }),
  )

  constructor(private episodesFacade: EpisodesFacadeService) {}
}
