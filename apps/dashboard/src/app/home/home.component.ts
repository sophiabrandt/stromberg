import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { DefaultEpisodesFacadeService } from '@stromberg/episodes'
import { Observable } from 'rxjs'

@Component({
  selector: 'stromberg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  allEpisodes$: Observable<Episode[]> = this.episodesFacade.getAll()

  constructor(private episodesFacade: DefaultEpisodesFacadeService) {}
}
