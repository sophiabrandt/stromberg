import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { AbstractEpisodesDataService } from './abstract-episodes-data.service'

describe('AbstractEpisodesDataService', () => {
  let service: AbstractEpisodesDataService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
    service = TestBed.inject(AbstractEpisodesDataService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
