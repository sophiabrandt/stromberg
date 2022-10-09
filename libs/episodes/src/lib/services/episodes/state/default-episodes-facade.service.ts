import { Injectable } from '@angular/core'
import { DefaultEpisodesDataService } from '../data/default-episodes-data.service'

@Injectable({
  providedIn: 'root',
})
export class DefaultEpisodesFacadeService {
  constructor(private episodesService: DefaultEpisodesDataService) {}

  getAll() {
    return this.episodesService.all()
  }
}
