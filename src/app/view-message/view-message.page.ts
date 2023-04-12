import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { PokemonDetailResponse, PokemonListItem } from '../interfaces/PokemonResponse';
import { PokeApiService } from '../service/poke-api.service';
import { DataService, Message } from '../services/data.service';
import { PokeDataService } from '../services/poke-data.service';
import { register, SwiperSlide } from 'swiper/element/bundle';
import Swiper from 'swiper';
register();

@Component({
    selector: 'app-view-message',
    templateUrl: './view-message.page.html',
    styleUrls: ['./view-message.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ViewMessagePage implements OnInit {
    public pokemonData = inject(PokeDataService);
    private pokemonApi = inject(PokeApiService);
    private activatedRoute = inject(ActivatedRoute);
    private platform = inject(Platform);

    pokemonListItem!: PokemonListItem;

    spriteUrl!: string;
    shinySpriteUrl!: string;
    index!: string;

    constructor() { }

    ngOnInit() {
        this.index = this.activatedRoute.snapshot.paramMap.get('id') as string;
        this.spriteUrl = this.pokemonData.getSpriteUrl(this.index);
        this.shinySpriteUrl = this.pokemonData.getShinySpriteUrl(this.index);

        // this.pokemonListItem = this.pokemonData.getPokemonById(parseInt(id, 10) - 1);
        this.pokemonApi.getPokemonDetail(parseInt(this.index, 10))
            .subscribe((pokemonDetail: PokemonDetailResponse) => {
                this.pokemonData.pokemonDetail = pokemonDetail;
                // console.log(this.pokemonData.pokemonDetail.types[0].type.name);

            });

    }

    getBackButtonText() {
        const isIos = this.platform.is('ios')
        return isIos ? 'Inbox' : '';
    }

    getTypeColor(type: string) {
        switch (type) {
            case 'poison': {
                return 'poison-type-color'
            }
            case 'psychic': {
                return 'psychic-type-color'
            }
            case 'grass': {
                return 'grass-type-color'
            }
            case 'ground': {
                return 'ground-type-color'
            }
            case 'ice': {
                return 'ice-type-color'
            }
            case 'rock': {
                return 'rock-type-color'
            }
            case 'dragon': {
                return 'dragon-type-color'
            }
            case 'water': {
                return 'water-type-color'
            }
            case 'fire': {
                return 'fire-type-color'
            }
            case 'bug': {
                return 'bug-type-color'
            }
            case 'dark': {
                return 'dark-type-color'
            }
            case 'fighting': {
                return 'fighting-type-color'
            }
            case 'ghost': {
                return 'ghost-type-color'
            }
            case 'steel': {
                return 'steel-type-color'
            }
            case 'flying': {
                return 'flying-type-color'
            }
            case 'electric': {
                return 'electric-type-color'
            }
            case 'fairy': {
                return 'fairy-type-color'
            }
            default: {
                return 'normal-type-color'
            }
        }
    }
}
