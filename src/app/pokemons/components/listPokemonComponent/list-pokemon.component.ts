import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
	selector: 'list-pokemon',
	templateUrl: './app/pokemons/components/listPokemonComponent/list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {

	pokemons: Pokemon[] = null;

	constructor(private router: Router, private pokemonsService: PokemonsService) { }

	ngOnInit(): void {
		this.getPokemons();
	}

	getPokemons(): void {
		this.pokemons = this.pokemonsService.getPokemons();
	}

	selectPokemon(pokemon: Pokemon): void {
		console.log('Vous avez selectionné ' + pokemon.name);
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}

}
