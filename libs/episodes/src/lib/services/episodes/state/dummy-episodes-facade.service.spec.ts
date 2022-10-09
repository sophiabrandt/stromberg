import { lastValueFrom } from 'rxjs'
import { dummyEpisodes } from '../data/dummy-episodes-data'
import { DummyEpisodesDataService } from '../data/dummy-episodes-data.service'
import { DummyEpisodesFacadeService } from './dummy-episodes-facade.service'

describe('DummyEpisodesFacadeService', () => {
  it('returns dummy episodes from the data service', async () => {
    const dataService = new DummyEpisodesDataService()
    const facade = new DummyEpisodesFacadeService(dataService)

    await expect(lastValueFrom(facade.getAll())).resolves.toStrictEqual(dummyEpisodes)
  })
})
