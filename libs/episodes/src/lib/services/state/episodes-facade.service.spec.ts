import { waitForAsync } from '@angular/core/testing'
import { assertType, mockEpisode, mockEpisodes } from '@stromberg/testing-utils'
import { lastValueFrom, of } from 'rxjs'
import { DefaultEpisodesDataService } from '../data/default-episodes-data.service'
import { EpisodesFacadeService } from './episodes-facade.service'

describe('EpisodesFacadeService', () => {
  it('calls the episodesDataService for getAll()', waitForAsync(() => {
    const facade = setup()
    const getAllSpy = jest.spyOn(facade, 'getAll')

    expect(lastValueFrom(facade.getAll())).resolves.toStrictEqual(mockEpisodes)
    expect(getAllSpy).toHaveBeenCalledTimes(1)
  }))

  it('selects an episode', waitForAsync(() => {
    const facade = setup()
    const selectSpy = jest.spyOn(facade, 'selectEpisode')

    facade.selectEpisode(mockEpisode)

    expect(selectSpy).toHaveBeenCalledTimes(1)
    expect(selectSpy).toHaveBeenCalledWith(mockEpisode)
  }))

  function setup() {
    const dataService = {
      all: jest.fn().mockReturnValue(of(mockEpisodes)),
    }
    return new EpisodesFacadeService(assertType<DefaultEpisodesDataService>(dataService))
  }
})
