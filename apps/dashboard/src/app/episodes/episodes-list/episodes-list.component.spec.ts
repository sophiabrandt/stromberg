import { mockEpisodes } from '@stromberg/testing-utils'
import { render } from '@testing-library/angular'
import { EpisodesListComponent } from './episodes-list.component'

describe('EpisodesListComponent', () => {
  it('renders episodes', async () => {
    const instance = await render(EpisodesListComponent, {
      componentProperties: {
        episodes: mockEpisodes,
      },
    })

    instance.getByRole('heading', { name: /episoden/i })
    instance.getByRole('heading', { name: /herr nehring/i })
  })
})
