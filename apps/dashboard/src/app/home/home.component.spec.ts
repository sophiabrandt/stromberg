import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DefaultEpisodesFacadeService } from '@stromberg/episodes'
import { mockEpisodesFacade } from '@stromberg/testing-utils'
import { render } from '@testing-library/angular'
import { of } from 'rxjs'
import { EpisodesListComponent } from '../episodes/episodes-list/episodes-list.component'
import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
  it('shows episodes on HomeComponent', async () => {
    const instance = await render(HomeComponent, {
      imports: [HttpClientTestingModule],
      declarations: [EpisodesListComponent],
      providers: [
        {
          provide: DefaultEpisodesFacadeService,
          useValue: mockEpisodesFacade,
        },
      ],
    })
    instance.getByRole('heading', { name: /herr nehring/i })
    expect(instance.getAllByRole('listitem')[0]).not.toHaveClass('mousePointer')
  })

  it('shows error messages', async () => {
    const instance = await render(HomeComponent, {
      imports: [HttpClientTestingModule],
      declarations: [EpisodesListComponent],
      providers: [
        {
          provide: DefaultEpisodesFacadeService,
          useValue: { ...mockEpisodesFacade, getAll: () => of(null) },
        },
      ],
      componentProperties: {
        errorMessages$: of('some error'),
      },
    })

    expect(instance.getByRole('banner')).toHaveClass('error-banner')
  })
})
