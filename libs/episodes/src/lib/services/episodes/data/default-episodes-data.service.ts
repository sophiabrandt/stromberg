import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { catchError, filter, map, Observable, shareReplay, throwError } from 'rxjs'
import { EPISODES_API_URL } from '../episodes.service.tokens'
import { AbstractEpisodesDataService } from './abstract-episodes-data.service'

@Injectable({
  providedIn: 'root',
})
export class DefaultEpisodesDataService implements AbstractEpisodesDataService {
  constructor(private http: HttpClient, @Inject(EPISODES_API_URL) private episodesApiUrl: string) {}

  all(): Observable<Episode[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    return this.http.get<Episode[]>(this.episodesApiUrl, { headers }).pipe(
      filter((episodes) => episodes !== undefined),
      map((episodes) =>
        episodes.map((apiEpisode) => {
          return {
            id: apiEpisode.id,
            episode: apiEpisode.episode,
            title: apiEpisode.title,
            season: apiEpisode.season,
            description: apiEpisode.description,
            script: apiEpisode.script,
            director: apiEpisode.director,
            releaseDate: apiEpisode.releaseDate,
          }
        }),
      ),
      shareReplay({ refCount: true, bufferSize: 1 }),
      catchError(this.handleError),
    )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = ''
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${error.error}`
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Server returned status ${error.status}: ${error.message}`
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorMessage))
  }
}
