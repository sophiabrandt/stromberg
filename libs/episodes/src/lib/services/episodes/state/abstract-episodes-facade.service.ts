import { Injectable } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractEpisodesFacadeService {
  abstract all(): Observable<Episode[]>
}
