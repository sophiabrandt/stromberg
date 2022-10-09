import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Episode } from '@stromberg/api-interfaces'
import { map, Observable } from 'rxjs'
import { AbstractEpisodesDataService } from './abstract-episodes-data.service'
import { EPISODES_API_URL } from '../episodes.service.tokens'

@Injectable({
  providedIn: 'root',
})
export class DefaultEpisodesDataService implements AbstractEpisodesDataService {
  constructor(private http: HttpClient, @Inject(EPISODES_API_URL) private episodesApiUrl: string) {}

  all(): Observable<Episode[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    return this.http.get<Episode[]>(this.episodesApiUrl, { headers }).pipe(
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
            releaseDate: new Date(apiEpisode.releaseDate),
          }
        }),
      ),
    )
  }
}
