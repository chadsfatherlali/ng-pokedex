export interface IResults {
  name: string
  url: string
}

export interface IPokemonsEndpoints {
  count: number
  next: string | null
  previous: string | null
  results: IResults[]
}
