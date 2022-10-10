import { mockEpisode } from '@stromberg/testing-utils'
import { render } from '@testing-library/angular'
import userEvent from '@testing-library/user-event'
import { EpisodeDetailComponent } from './episode-detail.component'

describe('EpisodeDetailComponent', () => {
  it('renders', async () => {
    const instance = await renderSetup()

    expect(instance).toBeTruthy()
  })

  it('resets an episode', async () => {
    const selectedSpy = jest.fn()
    const instance = await render(
      `<stromberg-episode-detail
                    [selectedEpisode]="selectedEpisode"
                    (selected)="selected($event)">
                  </stromberg-episode-detail>
                `,
      {
        declarations: [EpisodeDetailComponent],
        componentProperties: {
          selectedEpisode: mockEpisode,
          selected: selectedSpy,
        },
      },
    )
    await userEvent.click(instance.getByRole('button', { name: /reset/i }))
    expect(selectedSpy).toHaveBeenCalledWith(null)
  })

  async function renderSetup(componentProperties = {}) {
    const defaultProperties = {
      selectedEpisode: mockEpisode,
    }
    return await render(EpisodeDetailComponent, {
      componentProperties: { ...defaultProperties, ...componentProperties },
    })
  }
})
