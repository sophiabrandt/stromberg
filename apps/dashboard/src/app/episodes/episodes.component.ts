import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { DefaultEpisodesFacadeService } from '@stromberg/episodes'
import { combineLatest, map, Observable } from 'rxjs'

@Component({
  selector: 'stromberg-episode',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesComponent {
  readonly allEpisodes$: Observable<Episode[]> = this.episodesFacade.getAll()

  readonly selectedEpisode$: Observable<Episode | null> = this.episodesFacade.selectedEpisode$

  readonly vm$ = combineLatest([this.allEpisodes$, this.selectedEpisode$]).pipe(
    map(([episodes, selectedEpisode]) => ({ episodes, selectedEpisode })),
  )

  constructor(private episodesFacade: DefaultEpisodesFacadeService) {}

  selectEpisode(episode: Episode) {
    this.episodesFacade.selectEpisode(episode)
  }
}
