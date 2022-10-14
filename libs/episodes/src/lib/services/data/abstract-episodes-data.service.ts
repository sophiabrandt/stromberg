import { HttpClient } from '@angular/common/http'
import { Injectable, Injector } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { Observable } from 'rxjs'
import { episodesDataServiceFactory } from './episodes-data-service-factory'

@Injectable({
  providedIn: 'root',
  useFactory: episodesDataServiceFactory,
  deps: [HttpClient, Injector],
})
export abstract class AbstractEpisodesDataService {
  abstract all(): Observable<Episode[]>
}
