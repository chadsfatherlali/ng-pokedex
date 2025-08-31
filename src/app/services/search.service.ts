import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { API_URL, LIMIT, OFFSET } from '../constants';
import { IPokemonsEndpoints, IResults } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private http = inject(HttpClient)

  totalPokemons!: number 
  pokemons = signal<any[]>([])

  constructor() {}

  getPokemons(offset: number = OFFSET, limit: number = LIMIT): any {
    const pokemonsEndPoints: Observable<IPokemonsEndpoints> = this.http.get<IPokemonsEndpoints>(`${API_URL}?limit=${limit}&offset=${offset}`)

    pokemonsEndPoints.pipe(
      map((data: IPokemonsEndpoints) => {
        this.totalPokemons = data.count

        return data.results.map((results: IResults) => results.url)
      }),
      switchMap((urls: string[]) => {
        const requests: Observable<any>[] = urls.map((url: string) => this.http.get<any>(url))

        return forkJoin(requests)
      })
    ).subscribe((results: any) => {
      this.pokemons.set(results)
    })
  }
}
