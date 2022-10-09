import { Injectable } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { BehaviorSubject } from 'rxjs'
import { DefaultEpisodesDataService } from '../data/default-episodes-data.service'

@Injectable({
  providedIn: 'root',
})
export class DefaultEpisodesFacadeService {
  private selectedEpisode = new BehaviorSubject<Episode | null>(null)

  readonly selectedEpisode$ = this.selectedEpisode.asObservable()

  constructor(private episodesService: DefaultEpisodesDataService) {}

  getAll() {
    return this.episodesService.all()
  }

  selectEpisode(episode: Episode): void {
    this.selectedEpisode.next(episode)
  }
}
