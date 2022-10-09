import { Injectable } from '@angular/core'
import { DummyEpisodesDataService } from '../data/dummy-episodes-data.service'

@Injectable({
  providedIn: 'root',
})
export class DummyEpisodesFacadeService {
  constructor(private episodesDataService: DummyEpisodesDataService) {}

  getAll() {
    return this.episodesDataService.all()
  }
}
