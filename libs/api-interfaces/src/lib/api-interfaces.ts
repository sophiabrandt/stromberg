export interface BaseEntity {
  id: string | number | null
}

export interface Episode extends BaseEntity {
  episode: number
  title: string
  season: number
  description: string
  script: string
  director: string
  releaseDate: Date
  createdAt?: Date
  updatedAt?: Date
}
