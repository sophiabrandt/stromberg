import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { catchError, filter, map, Observable, shareReplay, throwError } from 'rxjs'
import { AbstractEpisodesDataService } from './abstract-episodes-data.service'

@Injectable({
  providedIn: 'root',
})
export class DefaultEpisodesDataService implements AbstractEpisodesDataService {
  constructor(private http: HttpClient) {}

  private episodesCache$: Observable<Episode[]> | null = null

  all(): Observable<Episode[]> {
    if (!this.episodesCache$) {
      this.episodesCache$ = this.getEpisodes()
    }
    return this.episodesCache$
  }

  private getEpisodes(): Observable<Episode[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    return this.http.get<Episode[]>('/api/episodes', { headers }).pipe(
      filter((episodes: Episode[]) => episodes !== undefined),
      map((episodes: Episode[]) =>
        episodes.map((apiEpisode: Episode) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { createdAt, updatedAt, ...rest } = apiEpisode
          return rest
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
