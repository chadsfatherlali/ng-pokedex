import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { API_URL } from './constants';
import { IPokemonsEndpoints, IResults } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private http = inject(HttpClient)
  private apiUrls: string[] = []

  constructor() {}

  getPokemons(limit: number = 20, offset: number = 0): Observable<any> {
    const pokemonsEndPoints: Observable<IPokemonsEndpoints> = this.http.get<IPokemonsEndpoints>(`${API_URL}?limit=${limit}&offset=${offset}`)

    return pokemonsEndPoints.pipe(
      map((data: IPokemonsEndpoints) => data.results.map((results: IResults) => results.url)),
      switchMap((urls: string[]) => {
        const requests: Observable<any>[] = urls.map((url: string) => this.http.get<any>(url))

        return forkJoin(requests)
      })
    )
  }
}
