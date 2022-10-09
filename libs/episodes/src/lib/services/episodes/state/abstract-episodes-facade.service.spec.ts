import { TestBed } from '@angular/core/testing';
import { AbstractEpisodesFacadeService } from './abstract-episodes-facade.service';

describe('AbstractEpisodesService', () => {
  let service: AbstractEpisodesFacadeService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AbstractEpisodesFacadeService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
