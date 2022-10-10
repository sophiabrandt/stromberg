import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { DefaultEpisodesFacadeService } from '@stromberg/episodes'
import { catchError, combineLatest, EMPTY, map, Observable, Subject } from 'rxjs'

@Component({
  selector: 'stromberg-episode',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesComponent {
  private errorMessages = new Subject<string>()

  readonly allEpisodes$: Observable<Episode[]> = this.episodesFacade.getAll().pipe(
    catchError((err) => {
      this.errorMessages.next(err)
      return EMPTY
    }),
  )

  readonly errorMessages$ = this.errorMessages.asObservable()

  readonly selectedEpisode$: Observable<Episode | null> = this.episodesFacade.selectedEpisode$

  readonly vm$ = combineLatest([this.allEpisodes$, this.selectedEpisode$]).pipe(
    map(([episodes, selectedEpisode]) => ({ episodes, selectedEpisode })),
  )

  constructor(private episodesFacade: DefaultEpisodesFacadeService) {}

  selectEpisode(episode: Episode) {
    this.episodesFacade.selectEpisode(episode)
  }
}
