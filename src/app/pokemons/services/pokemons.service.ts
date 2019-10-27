import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { POKEMONS } from '../mock-pokemons';

@Injectable()
export class PokemonsService {

	// Retourne tous les pokémons
	getPokemons(): Pokemon[] {
		return POKEMONS;
	}

	// Retourne le pokémon avec l'identifiant passé en paramètre
	getPokemon(id: number): Pokemon {
		let pokemons = this.getPokemons();

		return pokemons.find(pokemon => pokemon.id === id);
	}
}
