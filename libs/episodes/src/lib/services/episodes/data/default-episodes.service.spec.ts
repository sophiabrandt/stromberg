import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { DefaultEpisodesDataService } from './default-episodes-data.service';
import { dummyEpisodes } from './dummy-episodes-data';

describe('DefaultEpisodesDataService', () => {
  let service: DefaultEpisodesDataService
  let httpMock: HttpTestingController

  it('should be created', () => {
    setup()
    expect(service).toBeTruthy()
  })

  it('returns all episodes', waitForAsync(() => {
    setup()
    service.all().subscribe((res) => {
      expect(res.toString()).toEqual(dummyEpisodes.toString())
    })

    const mockRequest = httpMock.expectOne('http://localhost:3333/episodes')
    mockRequest.flush(dummyEpisodes)

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
