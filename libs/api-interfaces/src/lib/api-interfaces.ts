import { HttpErrorResponse } from '@angular/common/http'

export interface HttpRequestState<T> {
  isLoading: boolean
  value?: T
  error?: HttpErrorResponse | Error
}

export interface BaseEntity {
  id: string | number
}

export interface Episode extends BaseEntity {
  episode: number
  title: string
  season: number
  description: string
  script: string
  director: string
  releaseDate: string
  createdAt?: Date
  updatedAt?: Date
}
