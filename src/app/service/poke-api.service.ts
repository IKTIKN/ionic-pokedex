import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonDetailResponse, PokemonListResponse } from '../interfaces/PokemonResponse';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PokeApiService {
    limit: number = 600;
    pokemonListUrl: string = `https://pokeapi.co/api/v2/pokemon/?0&limit=${this.limit}`;
    pokemonDetailUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(private http: HttpClient) {}

    getPokemonList(): Observable<PokemonListResponse> {
        return this.http.get<PokemonListResponse>(this.pokemonListUrl);
    }

    getPokemonDetail(id: number): Observable<PokemonDetailResponse> {
        const url = this.pokemonDetailUrl.concat(id.toString());
        return this.http.get<PokemonDetailResponse>(url)
    }
}
