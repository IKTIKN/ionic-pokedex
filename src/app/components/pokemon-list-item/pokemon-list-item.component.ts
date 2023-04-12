import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PokemonListItem } from 'src/app/interfaces/PokemonResponse';

@Component({
    selector: 'app-pokemon-list-item',
    templateUrl: './pokemon-list-item.component.html',
    styleUrls: ['./pokemon-list-item.component.scss'],
    standalone: true,
    imports: [CommonModule, IonicModule, RouterLink],
})
export class PokemonListItemComponent implements OnInit {
    @Input() pokemon!: PokemonListItem;
    @Input() index!: number;

    spriteUrl!: string;

    constructor() { }

    ngOnInit() {
        this.index += 1;
        this.spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.index}.png`; 
    }

}
