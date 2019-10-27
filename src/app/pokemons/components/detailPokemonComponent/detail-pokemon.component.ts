import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
	selector: 'detail-pokemon',
	templateUrl: './app/pokemons/components/detailPokemonComponent/detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

	pokemon: Pokemon = null;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pokemonsService: PokemonsService) { }

	ngOnInit(): void {
		let id = +this.route.snapshot.paramMap.get('id');
		this.pokemon = this.pokemonsService.getPokemon(id);
	}

	goBack(): void {
		this.router.navigate(['/pokemons']);
	}

}
