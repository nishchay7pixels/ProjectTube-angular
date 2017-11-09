import {AfterContentChecked, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {YoutubePlayerService} from "../../services/youtube-player.service";
import OnStateChangeEvent = YT.OnStateChangeEvent;
import {Video} from "../../services/Video";
import {MdDialog, MdSnackBar} from "@angular/material";
import {YoutubePlayerVideoDescriptionComponent} from "./youtube-player-video-description/youtube-player-video-description.component";

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent {

  enabled = true;
  expanded = false;
  player: YT.Player;
  id: string;
  // dataChange: EventEmitter<string> = new EventEmitter();
  playing = true;
  sound = true;
  playlist: string[];
  current = 0;

  constructor(private ytps: YoutubePlayerService, public dialog: MdDialog) {
  }

  //
  // savePlayer (player) {
  //   this.player = player;
  //   console.log('player instance', player)
  // }
  // onStateChange(event){
  //   console.log('player state', event.data);
  //
  // }

  savePlayer(player) {
    this.ytps.savePlayer(player);
  }

  onStateChange(event) {
    console.log('player state', event.data);

  }


  ngOnInit() {
    this.ytps.enablePlayer().then(player => this.player = player);
  }

  getVideos(): void {
    this.ytps.getPlaylist().then(playlist => {
      let list: string[];
      for (let video of playlist) {
        list.push(video.id);
      }
      this.playlist = list;
    });
  }

  expandPlayer() {
    this.ytps.player.setSize(854, 480);
    console.log('expanded');
    this.playing = true;
    this.expanded = true;
    this.enabled = true;
  }

  minimizePlayer() {
    this.ytps.player.setSize(367.5, 270);
    console.log('minimized');
    this.playing = true;
    this.expanded = false;
    this.enabled = true;
  }

  closePlayer() {
    this.ytps.player.setSize(0, 0);
    this.expanded = true;
    this.enabled = false;
  }

  stopVideo() {
    this.ytps.player.stopVideo();
    this.closePlayer();
    this.playing = false;
  }

  playVideo() {
    this.ytps.player.playVideo();
    this.minimizePlayer();
  }

  muteVideo() {
    this.ytps.player.mute();
    this.sound = false;

  }

  unmuteVideo() {
    this.ytps.player.unMute();
    this.sound = true;
  }

  nextVideo() {
    this.ytps.getPlaylist().then(playlist => {
      let list: string[] = [''];
      for (let video of playlist) {
        list.push(video.id);
      }
      this.playlist = list;
    });

    this.ytps.player.loadPlaylist(this.playlist);


  }

}
