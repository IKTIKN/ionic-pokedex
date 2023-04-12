import { Injectable } from '@angular/core';
import { PokemonDetailResponse, PokemonListItem } from '../interfaces/PokemonResponse';

@Injectable({
    providedIn: 'root'
})
export class PokeDataService {

    pokemonList: PokemonListItem[] = [];
    pokemonDetail!: PokemonDetailResponse;

    constructor() { }

    getPokemonById(id: number): PokemonListItem {
        return this.pokemonList[id];
    }

    getSpriteUrl(index: string): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`; 
    }

    getGameboySpriteUrl(index: string): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
    }
}
