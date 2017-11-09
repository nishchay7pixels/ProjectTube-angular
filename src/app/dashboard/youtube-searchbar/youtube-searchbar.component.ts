import {Component, EventEmitter, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Http} from "@angular/http";

import { YoutubeApiService } from '../../services/youtube-api.service';
import {YoutubePlayerService} from "../../services/youtube-player.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MdDialog} from "@angular/material";

const YOUTUBE_API_KEY = "AIzaSyDVgNbO40smsbGwLv-mtYnMJ-VNsEogLbI";

@Component({
  selector: 'app-searchbar',
  templateUrl: './youtube-searchbar.component.html',
  styleUrls: ['youtube-searchbar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})


export class YoutubeSearchbarComponent implements OnInit {
  formGroup: FormGroup;
  query: string;
  base_url: string = 'https://www.googleapis.com/youtube/v3/';
  max_results: number = 48 ;
  results: any [];
  id: string;
  menuState:string = 'out';
  dataChange: EventEmitter<string> = new EventEmitter();
  // public openState: boolean = false;
  // basic: boolean=false;
  videosList:boolean=true;
  categoryList:boolean;
  basic:boolean;
  constructor(private fb: FormBuilder, private http: Http, private ytApi : YoutubeApiService, private yps : YoutubePlayerService,public dialog: MdDialog) {
    this.createForm();
    this.ytApi.trendingVideos().then(results=>{this.results=results});
    this.videosList=true;
    this.categoryList=false;
    this.basic=true;
  }


  getTrending(){
    this.videosList=true;
    this.categoryList=false;
    this.ytApi.trendingVideos().then(results=>{this.results=results});
  }



  ngOnInit() {

  }

  createForm(): void {
    this.formGroup = this.fb.group({
      searchFor: ''
    })


  };

  Search():void{
    this.videosList=true;
    this.categoryList=false;
    this.query=this.formGroup.getRawValue().searchFor;
    console.log(this.query);
    this.ytApi.searchVideos(this.query).then(results=>{this.results=results});
    console.log(this.results);

  }
  onScroll():void {
    console.log('onscroll');
    this.ytApi.searchNext().then(results => {
      results.forEach((val)=>{this.results.push(val);})
    });
    console.log(this.results);
  }

  toggleUserPlaylist() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  playThisVideo(id : string, title:string): void {
    this.yps.player.loadVideoById(id);
    console.log(title);
    this.yps.addToPlaylist(id,title);

  }

  getLiveVideos(): void{
    console.log("Live");
    this.ytApi.getLiveVideos().then(results=>{this.results=results});


  }

  getCategories(): void{
  }
}
