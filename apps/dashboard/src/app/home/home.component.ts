import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { DefaultEpisodesFacadeService } from '@stromberg/episodes'
import { catchError, EMPTY, Observable, Subject } from 'rxjs'

@Component({
  selector: 'stromberg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private errorMessages = new Subject<string>()

  readonly errorMessages$ = this.errorMessages.asObservable()

  allEpisodes$: Observable<Episode[]> = this.episodesFacade.getAll().pipe(
    catchError((err) => {
      this.errorMessages.next(err)
      return EMPTY
    }),
  )

  constructor(private episodesFacade: DefaultEpisodesFacadeService) {}
}
