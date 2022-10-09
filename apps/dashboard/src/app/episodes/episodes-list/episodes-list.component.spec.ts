import { dummyEpisodes } from '@stromberg/episodes'
import { render } from '@testing-library/angular'
import { EpisodesListComponent } from './episodes-list.component'

describe('EpisodesListComponent', () => {
  it('renders episodes', async () => {
    const instance = await render(EpisodesListComponent, {
      componentProperties: {
        episodes: dummyEpisodes,
      },
    })

    instance.getByRole('heading', { name: /Episodes/i })
    instance.getByRole('heading', { name: /Herr Nehring/i })
  })
})
