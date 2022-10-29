import { mockEpisodes } from '@stromberg/testing-utils'
import { render } from '@testing-library/angular'
import userEvent from '@testing-library/user-event'
import { NgxPaginationModule } from 'ngx-pagination'
import { EpisodesListComponent } from './episodes-list.component'

describe('EpisodesListComponent', () => {
  it('renders episodes', async () => {
    const instance = await render(EpisodesListComponent, {
      imports: [NgxPaginationModule],
      componentProperties: {
        episodes: mockEpisodes,
      },
    })

    instance.getByRole('heading', { name: /episoden/i })
    instance.getByRole('heading', { name: /herr nehring/i })
  })

  it('selects an episode', async () => {
    const selectedSpy = jest.fn()
    const instance = await render(
      `<stromberg-episodes-list
                    [episodes]="episodes"
                    [selectable]="selectable"
                    (selected)="selected($event)"
                    >
                  </stromberg-episodes-list>
                `,
      {
        imports: [NgxPaginationModule, EpisodesListComponent],
        componentProperties: {
          episodes: mockEpisodes,
          selectable: true,
          selected: selectedSpy,
        },
      },
    )
    await userEvent.click(instance.getByRole('heading', { name: /malik/i }))
    expect(selectedSpy).toHaveBeenCalledWith(mockEpisodes[2])
  })
})
