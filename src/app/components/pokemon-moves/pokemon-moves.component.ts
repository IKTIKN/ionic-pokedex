import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Mfe, Move } from 'src/app/interfaces/PokemonResponse';

@Component({
    selector: 'app-pokemon-moves',
    templateUrl: './pokemon-moves.component.html',
    styleUrls: ['./pokemon-moves.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, RouterLink]
})
export class PokemonMovesComponent implements OnInit {
    @Input() moves!: Mfe[]

    constructor() { }

    ngOnInit() { }

}
