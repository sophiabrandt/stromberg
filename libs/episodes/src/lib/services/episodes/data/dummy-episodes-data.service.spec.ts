import { TestBed } from '@angular/core/testing'
import { lastValueFrom } from 'rxjs'
import { dummyEpisodes } from './dummy-episodes-data'

import { DummyEpisodesDataService } from './dummy-episodes-data.service'

describe('DummyEpisodesDataService', () => {
  let service: DummyEpisodesDataService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DummyEpisodesDataService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('returns all episodes', async () => {
    await expect(lastValueFrom(service.all())).resolves.toEqual(dummyEpisodes)
  })
})
