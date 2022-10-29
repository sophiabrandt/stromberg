import { mockEpisode } from '@stromberg/testing-utils'
import { render } from '@testing-library/angular'
import userEvent from '@testing-library/user-event'
import { EpisodeDetailComponent } from './episode-detail.component'

describe('EpisodeDetailComponent', () => {
  it('resets an episode', async () => {
    const selectedSpy = jest.fn()
    const instance = await render(
      `<stromberg-episode-detail
                    [selectedEpisode]="selectedEpisode"
                    (selected)="selected($event)">
                  </stromberg-episode-detail>
                `,
      {
        imports: [EpisodeDetailComponent],
        componentProperties: {
          selectedEpisode: mockEpisode,
          selected: selectedSpy,
        },
      },
    )
    await userEvent.click(instance.getByRole('button', { name: /reset/i }))
    expect(selectedSpy).toHaveBeenCalledWith(null)
  })
})
