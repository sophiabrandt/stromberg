import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DefaultEpisodesFacadeService } from '@stromberg/episodes'
import { assertType, mockEpisode, mockEpisodesFacade } from '@stromberg/testing-utils'
import { render } from '@testing-library/angular'
import { NgxPaginationModule } from 'ngx-pagination'
import { of } from 'rxjs'
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component'
import { EpisodesListComponent } from './episodes-list/episodes-list.component'
import { EpisodesComponent } from './episodes.component'

describe('EpisodesComponent', () => {
  it('renders episodes with no details', async () => {
    const instance = await renderSetup()
    instance.getByRole('heading', { name: /herr nehring/i })
    instance.getByRole('heading', { name: /details/i })
    instance.getByText(/wähle eine episode aus der ansicht/i)
  })

  it('renders episodes with details view', async () => {
    const instance = await renderSetup({
      selectedEpisode$: of(mockEpisode),
    })
    instance.getByRole('heading', { name: /herr nehring/i })
    expect(instance.getAllByRole('listitem').slice(-1)[0]).toHaveClass('mousePointer')
    expect(instance.queryByText(/wähle eine episode aus der ansicht/i)).not.toBeInTheDocument()
    instance.getByText(/regie: arne feldhusen/i)
    instance.getByText(/season: 3, episode: 4/i)
  })

  it('selects an episode for a detail view', async () => {
    const component = new EpisodesComponent(assertType<DefaultEpisodesFacadeService>(mockEpisodesFacade))
    const selectSpy = jest.spyOn(mockEpisodesFacade, 'selectEpisode')

    component.selectEpisode(mockEpisode)

    expect(selectSpy).toHaveBeenCalledWith(mockEpisode)
    expect(selectSpy).toHaveBeenCalledTimes(1)
  })

  it('shows error messages', async () => {
    const instance = await renderSetup(
      {
        getAll: () => of(null),
      },
      {
        episodesDataState$: of({ isLoading: false, error: new Error('http request error') }),
        selectedEpisode$: of(null),
      },
    )

    expect(instance.getByRole('banner')).toHaveClass('error-banner')
  })

  async function renderSetup(mockFacadeOverwrites = {}, componentProperties = {}) {
    return await render(EpisodesComponent, {
      imports: [HttpClientTestingModule, NgxPaginationModule],
      declarations: [EpisodesListComponent, EpisodeDetailComponent],
      providers: [
        {
          provide: DefaultEpisodesFacadeService,
          useValue: { ...mockEpisodesFacade, ...mockFacadeOverwrites },
        },
      ],
      componentProperties,
    })
  }
})
