import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'

@Component({
  selector: 'stromberg-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeDetailComponent {
  @Input()
  selectedEpisode: Episode | null = null

  @Output()
  selected = new EventEmitter()
}
