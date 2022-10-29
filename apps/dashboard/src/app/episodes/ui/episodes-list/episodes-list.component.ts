import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { NgxPaginationModule } from 'ngx-pagination'

@Component({
  selector: 'stromberg-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
})
export class EpisodesListComponent {
  @Input()
  episodes: Episode[] = []

  @Input()
  selectable = false

  @Input()
  episodesPerPage = 4

  @Output()
  selected = new EventEmitter()

  page = 1
}
