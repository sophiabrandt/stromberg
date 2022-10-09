import { Injectable } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { mockEpisodes } from '@stromberg/testing-utils'
import { Observable, of } from 'rxjs'
import { AbstractEpisodesDataService } from './abstract-episodes-data.service'

@Injectable({
  providedIn: 'root',
})
export class DummyEpisodesDataService implements AbstractEpisodesDataService {
  all(): Observable<Episode[]> {
    return of(mockEpisodes)
  }
}
