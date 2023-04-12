import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { PokemonListItemComponent } from '../components/pokemon-list-item/pokemon-list-item.component';
import { PokemonListItem, PokemonListResponse } from '../interfaces/PokemonResponse';
import { MessageComponent } from '../message/message.component';
import { PokeApiService } from '../service/poke-api.service';

import { DataService, Message } from '../services/data.service';
import { PokeDataService } from '../services/poke-data.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, MessageComponent, PokemonListItemComponent],
    providers: [HttpClient],
})
export class HomePage {
    
    constructor(public pokeApi: PokeApiService, public pokeData: PokeDataService) { 
        pokeApi.getPokemonList().subscribe((pokemonListResponse: PokemonListResponse) => {
            this.pokeData.pokemonList = pokemonListResponse.results;
        });
    }

    refresh(ev: any) {
        setTimeout(() => {
            (ev as RefresherCustomEvent).detail.complete();
        }, 3000);
    }


}
