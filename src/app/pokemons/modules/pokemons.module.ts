import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemons-routing.module';

import { ListPokemonComponent } from '../components/listPokemonComponent/list-pokemon.component';
import { DetailPokemonComponent } from '../components/detailPokemonComponent/detail-pokemon.component';
import { BorderCardDirective } from '../directives/border-card.directive';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';
import { PokemonsService } from '../services/pokemons.service';

@NgModule({
	imports: [
		CommonModule,
		PokemonRoutingModule
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		BorderCardDirective,
		PokemonTypeColorPipe
	],
	providers: [PokemonsService]
})
export class PokemonsModule { }
