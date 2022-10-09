import { mockEpisode } from '@stromberg/testing-utils'
import { render } from '@testing-library/angular'
import { EpisodeDetailComponent } from './episode-detail.component'

describe('EpisodeDetailComponent', () => {
  it('shows episode details', async () => {
    const instance = await render(EpisodeDetailComponent, {
      componentProperties: {
        selectedEpisode: mockEpisode,
      },
    })

    expect(instance).toBeTruthy()
  })
})
