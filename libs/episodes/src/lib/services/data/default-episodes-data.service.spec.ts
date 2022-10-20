import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TestBed, waitForAsync } from '@angular/core/testing'
import { mockEpisodes } from '@stromberg/testing-utils'
import { lastValueFrom } from 'rxjs'
import { DefaultEpisodesDataService } from './default-episodes-data.service'

describe('DefaultEpisodesDataService', () => {
  let service: DefaultEpisodesDataService
  let httpMock: HttpTestingController

  it('returns all episodes', waitForAsync(() => {
    setup()
    // first subscription
    expect(lastValueFrom(service.all())).resolves.toStrictEqual(mockEpisodes)
    // second subscription
    expect(lastValueFrom(service.all())).resolves.toStrictEqual(mockEpisodes)

    // only expect one HTTP call, even though two services have subscribed
    const mockRequest = httpMock.expectOne('http://localhost:3333/episodes')
    mockRequest.flush(mockEpisodes)

    expect(mockRequest.request.method).toEqual('GET')
    httpMock.verify()
  }))

  function setup() {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(DefaultEpisodesDataService)
    httpMock = TestBed.inject(HttpTestingController)
  }
})
