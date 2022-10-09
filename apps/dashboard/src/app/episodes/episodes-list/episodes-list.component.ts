import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'

@Component({
  selector: 'stromberg-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesListComponent {
  @Input()
  episodes: Episode[] = []

  @Input()
  selectable = false

  @Output()
  selected = new EventEmitter()
}
