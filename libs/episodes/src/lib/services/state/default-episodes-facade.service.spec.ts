import { waitForAsync } from '@angular/core/testing'
import { assertType, mockEpisode, mockEpisodes } from '@stromberg/testing-utils'
import { lastValueFrom } from 'rxjs'
import { DefaultEpisodesDataService } from '../data/default-episodes-data.service'
import { DummyEpisodesDataService } from '../data/dummy-episodes-data.service'
import { DefaultEpisodesFacadeService } from './default-episodes-facade.service'

describe('EpisodesFacadeService', () => {
  it('calls the episodesDataService for getAll()', async () => {
    const facade = setup()

    await expect(lastValueFrom(facade.getAll())).resolves.toStrictEqual(mockEpisodes)
  })

  it('selects an episode', waitForAsync(() => {
    const facade = setup()
    const selectSpy = jest.spyOn(facade, 'selectEpisode')

    facade.selectEpisode(mockEpisode)

    expect(selectSpy).toHaveBeenCalledTimes(1)
    expect(selectSpy).toHaveBeenCalledWith(mockEpisode)
    facade.selectedEpisode$.subscribe((res) => {
      expect(res).toBe(mockEpisode)
    })
  }))

  function setup() {
    const dataService = new DummyEpisodesDataService()
    return new DefaultEpisodesFacadeService(assertType<DefaultEpisodesDataService>(dataService))
  }
})
