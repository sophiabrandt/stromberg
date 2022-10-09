import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { DefaultEpisodesFacadeService } from '@stromberg/episodes'
import { Observable } from 'rxjs'

@Component({
  selector: 'stromberg-episode',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesComponent {
  allEpisodes$: Observable<Episode[]> = this.episodesFacade.getAll()

  constructor(private episodesFacade: DefaultEpisodesFacadeService) {}
}
