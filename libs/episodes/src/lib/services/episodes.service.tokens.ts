import { InjectionToken } from '@angular/core'

export const EPISODES_API_URL = new InjectionToken<string>('EPISODES_API_URL', {
  providedIn: 'root',
  factory: () => 'http://localhost:3333/episodes',
})
