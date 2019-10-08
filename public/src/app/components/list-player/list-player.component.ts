import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {
  players:object;
  player:object;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router, 
    private Player:PlayerService
  ) { }

  ngOnInit() {
    this.getPlayers()
  }

  getPlayers(){
    this.Player.getPlayers().subscribe( data => this.players = data )
  }

  readPlayer(id){
    this.Player.readPlayer(id).subscribe( data => {
      this.player = data
    })
    
  }

  deletePlayer(id){
    this.Player.readPlayer(id).subscribe( data => {
      if (window.confirm(`remove ${data[0].name}?`)) {
        this.Player.deletePlayer(id).subscribe( data => this.getPlayers())
      } else {
        console.log('cancelled')
      }
    })
  }

}
