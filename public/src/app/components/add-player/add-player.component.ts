import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  name:string;
  position:string;
  status1:string;
  status2:string;
  status3:string;
  errors:object;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router, 
    private Player:PlayerService
  ) { }

  ngOnInit() {
  }

  createPlayer(){
    const new_Player = {
      name: this.name,
      position: this.position
    }
    this.Player.createPlayer(new_Player).subscribe( data => {
      console.log(data)
      if (data.errors) {
        this.errors = data.errors;
      } else {
        this.errors = [];
      this._router.navigate(['players', 'list']);
    }
    })
  }

}
