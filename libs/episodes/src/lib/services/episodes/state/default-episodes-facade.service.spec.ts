import { assertType } from '@stromberg/testing-utils';
import { lastValueFrom } from 'rxjs';
import { DefaultEpisodesDataService } from '../data/default-episodes-data.service';
import { dummyEpisodes } from '../data/dummy-episodes-data';
import { DummyEpisodesDataService } from '../data/dummy-episodes-data.service';
import { DefaultEpisodesFacadeService } from './default-episodes-facade.service';

describe('EpisodesFacadeService', () => {
  it('calls the episodesDataService for getAll()', async () => {
    const dataService = new DummyEpisodesDataService()
    const facade = new DefaultEpisodesFacadeService(assertType<DefaultEpisodesDataService>(dataService))

    await expect(lastValueFrom(facade.getAll())).resolves.toStrictEqual(dummyEpisodes)
  })
})
