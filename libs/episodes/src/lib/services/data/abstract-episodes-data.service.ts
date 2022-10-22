import { Injectable } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { Observable } from 'rxjs'
import { DefaultEpisodesDataService } from './default-episodes-data.service'

@Injectable({
  providedIn: 'root',
  useClass: DefaultEpisodesDataService,
})
export abstract class AbstractEpisodesDataService {
  abstract all(): Observable<Episode[]>
}
