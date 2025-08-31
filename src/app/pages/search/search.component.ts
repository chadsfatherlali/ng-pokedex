import { Component, effect, inject } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { CardComponent } from "../../shared/card/card.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-search',
  imports: [CardComponent, ButtonComponent, HeaderComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private searchService = inject(SearchService)

  pokemons = this.searchService.pokemons

  constructor() {
    effect(() => {
      this.searchService.getPokemons()
    })
  }

  growl(urlSound: string) {
    const sound: HTMLAudioElement = new Audio(urlSound)

    sound.play()
  }
}
