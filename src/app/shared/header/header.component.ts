import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { LIMIT, OFFSET } from '../../constants';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private offset: number = 0
  private searchService = inject(SearchService)

  pokemons = this.searchService.pokemons

  next() {
    if (this.offset <= this.searchService.totalPokemons) {
      this.offset = this.offset + LIMIT 

      this.searchService.getPokemons(this.offset)
    }
  }

  prev() {
    if (this.offset > 0) {
      this.offset = this.offset - LIMIT

      this.searchService.getPokemons(this.offset)
    }
  }
}
