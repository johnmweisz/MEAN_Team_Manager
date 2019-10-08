import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private _http: HttpClient) { }

  getPlayers(){
    return this._http.get('/player');
  }
  createPlayer(Player){
    return this._http.post(`/player`, Player);
  }
  readPlayer(id){
    return this._http.get(`/player/${id}`);
  }
  updatePlayer(id, Player){
    return this._http.put(`/player/${id}`, Player)
  }
  deletePlayer(id){
    return this._http.delete(`/player/${id}`)
  }

}
