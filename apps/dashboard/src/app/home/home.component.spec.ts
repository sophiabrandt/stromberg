import { HttpClientTestingModule } from '@angular/common/http/testing'
import { EpisodesFacadeService } from '@stromberg/episodes'
import { mockEpisodesFacade } from '@stromberg/testing-utils'
import { render } from '@testing-library/angular'
import { NgxPaginationModule } from 'ngx-pagination'
import { of } from 'rxjs'
import { EpisodesListComponent } from '../episodes/ui/episodes-list/episodes-list.component'
import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
  it('shows episodes on HomeComponent', async () => {
    const instance = await renderSetup()
    instance.getByRole('heading', { name: /herr nehring/i })
    expect(instance.getAllByRole('listitem')[0]).not.toHaveClass('mousePointer')
  })

  it('shows error messages', async () => {
    const instance = await renderSetup(
      {
        getAll: () => of(null),
      },
      {
        episodesDataState$: of({ isLoading: false, error: new Error('http request error') }),
      },
    )

    expect(instance.getByRole('banner')).toHaveClass('error-banner')
  })

  async function renderSetup(mockFacadeOverwrites = {}, componentProperties = {}) {
    return await render(HomeComponent, {
      imports: [HttpClientTestingModule, NgxPaginationModule, EpisodesListComponent],
      providers: [
        {
          provide: EpisodesFacadeService,
          useValue: { ...mockEpisodesFacade, ...mockFacadeOverwrites },
        },
      ],
      componentProperties,
    })
  }
})
