import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { YoutubeApiService } from './services/youtube-api.service';
import {PlaylistNameFilterModule } from './pipes/playlist-item-name.pipe';
import {YoutubeSearchbarComponent } from './dashboard/youtube-searchbar/youtube-searchbar.component';
import { YoutubePlayerComponent } from './dashboard/youtube-player/youtube-player.component';

import { YoutubePlayerModule } from 'ng2-youtube-player';
import {YoutubePlayerService} from "./services/youtube-player.service";
import { UserPlaylistComponent } from './dashboard/youtube-searchbar/user-playlist/user-playlist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule, MdButtonModule, MdSidenavModule} from '@angular/material';
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import { YoutubePlayerVideoDescriptionComponent } from './dashboard/youtube-player/youtube-player-video-description/youtube-player-video-description.component';
import {MdDialogModule} from '@angular/material';
import { YoutubeCategoryComponent } from './dashboard/youtube-searchbar/youtube-category/youtube-category.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    YoutubeSearchbarComponent,
    YoutubePlayerComponent,
    UserPlaylistComponent,
    YoutubePlayerVideoDescriptionComponent,
    YoutubeCategoryComponent,

  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PlaylistNameFilterModule,
    YoutubePlayerModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdSidenavModule,
    InfiniteScrollModule,
    MdDialogModule

  ],
  providers: [YoutubeApiService, YoutubePlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
