import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './pokemons/components/listPokemonComponent/list-pokemon.component';
import { DetailPokemonComponent } from './pokemons/components/detailPokemonComponent/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';

// routes
const appRoutes: Routes = [
	{ path: '', redirectTo: 'pokemons', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
