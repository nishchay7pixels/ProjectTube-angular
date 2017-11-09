  import { Component, OnInit } from '@angular/core';
import {YoutubePlayerService} from "../../../services/youtube-player.service";
import {Video} from "../../../services/Video";

@Component({
  selector: 'app-user-playlist',
  templateUrl: './user-playlist.component.html',
  styleUrls: ['./user-playlist.component.css']
})
export class UserPlaylistComponent implements OnInit {
  playlist : Video[];

  constructor(private ytps : YoutubePlayerService) { }

  ngOnInit() {
    this.ytps.getPlaylist().then(playlist=> this.playlist=playlist);
  }


  Clickedit(){
    let list:string[]=[''];
    for (let video of this.playlist){
      list.push(video.id);
    }
    this.ytps.player.loadPlaylist(list);
  }

}
