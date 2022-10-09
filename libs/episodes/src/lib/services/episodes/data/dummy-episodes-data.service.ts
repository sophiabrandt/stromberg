import { Injectable } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { Observable, of } from 'rxjs'
import { AbstractEpisodesDataService } from './abstract-episodes-data.service'
import { dummyEpisodes } from './dummy-episodes-data'

@Injectable({
  providedIn: 'root',
})
export class DummyEpisodesDataService implements AbstractEpisodesDataService {
  all(): Observable<Episode[]> {
    return of(dummyEpisodes)
  }
}
