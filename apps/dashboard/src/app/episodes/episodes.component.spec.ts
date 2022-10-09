import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DefaultEpisodesFacadeService, DummyEpisodesFacadeService } from '@stromberg/episodes'
import { render } from '@testing-library/angular'
import { EpisodesListComponent } from './episodes-list/episodes-list.component'
import { EpisodesComponent } from './episodes.component'

describe('EpisodesComponent', () => {
  it('renders episodes', async () => {
    const instance = await render(EpisodesComponent, {
      imports: [HttpClientTestingModule],
      declarations: [EpisodesListComponent],
      providers: [
        {
          provide: DefaultEpisodesFacadeService,
          useClass: DummyEpisodesFacadeService,
        },
      ],
    })

    instance.getByRole('heading', { name: /Herr Nehring/i })
  })
})
