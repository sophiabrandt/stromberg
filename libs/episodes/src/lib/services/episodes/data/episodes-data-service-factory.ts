import { HttpClient } from '@angular/common/http'
import { Injector } from '@angular/core'
import * as process from 'process'
import { DefaultEpisodesDataService } from './default-episodes-data.service'
import { DummyEpisodesDataService } from './dummy-episodes-data.service'
import { EPISODES_API_URL } from '../episodes.service.tokens'

const TESTING = process.env['NODE_ENV'] === 'test'

export const episodesDataServiceFactory = (http: HttpClient, injector: Injector) => {
  const episodesApiUrl = injector.get(EPISODES_API_URL)
  return TESTING ? new DummyEpisodesDataService() : new DefaultEpisodesDataService(http, episodesApiUrl)
}
