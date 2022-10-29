import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Episode, HttpRequestState } from '@stromberg/api-interfaces'
import { EpisodesFacadeService } from '@stromberg/episodes'
import { ShowLoadingComponent } from '@stromberg/ui'
import { catchError, map, Observable, of, startWith } from 'rxjs'
import { EpisodeDetailComponent } from './ui/episode-detail/episode-detail.component'
import { EpisodesListComponent } from './ui/episodes-list/episodes-list.component'

@Component({
  selector: 'stromberg-episode',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
  standalone: true,
  imports: [CommonModule, EpisodesListComponent, EpisodeDetailComponent, ShowLoadingComponent],
})
export class EpisodesComponent implements OnInit {
  readonly episodesDataState$: Observable<HttpRequestState<Episode[]>> = this.episodesFacade.getAll().pipe(
    map((value) => ({ isLoading: false, value })),
    catchError((error) => of({ isLoading: false, error })),
    startWith({ isLoading: true }),
  )

  id = 0

  readonly selectedEpisode$: Observable<Episode | null> = this.episodesFacade.selectedEpisode$

  constructor(private episodesFacade: EpisodesFacadeService, private route: ActivatedRoute, private router: Router) {}

  selectEpisode(episode: Episode | null) {
    this.episodesFacade.selectEpisode(episode)
    episode?.id
      ? this.router.navigate(['episodes', episode.id]).then((r) => r)
      : this.router.navigate(['episodes']).then((r) => r)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })
  }
}
