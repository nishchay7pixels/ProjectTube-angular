import {EventEmitter, Injectable} from '@angular/core';
import { PLAYLIST } from './PLAYLIST';
import {Video} from "./Video";
@Injectable()
export class YoutubePlayerService {

  //New stuff

  player : YT.Player;
  dataChange: EventEmitter<string> = new EventEmitter();


  savePlayer (player){
    this.player=player;
  }

  onStateChange(event){
    console.log('player state', event.data);

  }

  enablePlayer(): Promise<YT.Player>{
    return Promise.resolve(this.player);
  }
  //New stuff end here

  getPlaylist(): Promise<Video[]>{
    return Promise.resolve(PLAYLIST);
  }

  addToPlaylist(vid: string,title: string){
    let newVideo: Video={id: vid,title:title};
    PLAYLIST.push(newVideo);
    console.log('added to playlist');
    console.log('playlist:: '+ PLAYLIST);
  }
}
