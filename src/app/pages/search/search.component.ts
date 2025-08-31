import { Component, effect, inject } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
  selector: 'app-search',
  imports: [AsyncPipe, CardComponent, ButtonComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private searchService = inject(SearchService)

  pokemons$!: Observable<any> 

  constructor() {
    effect(() => {
      this.pokemons$ = this.searchService.getPokemons()
    })
  }

  growl(urlSound: string) {
    const sound: HTMLAudioElement = new Audio(urlSound)

    sound.play()
  }
}
