import { Component, OnInit } from '@angular/core';
import { GameItem } from 'src/app/interface/game-item.interface';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  listaVideoGiochi:Array<string> =[
  "COD","FIFA","HALO","GTA"
  ]

  constructor() { }

  ngOnInit(): void {
  }
gameList: GameItem[];
}
