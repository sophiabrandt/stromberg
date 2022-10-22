import { Episode } from '@stromberg/api-interfaces'
import { Observable } from 'rxjs'

export abstract class AbstractEpisodesDataService {
  abstract all(): Observable<Episode[]>
}
