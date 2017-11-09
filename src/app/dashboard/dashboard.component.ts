import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

const YOUTUBE_API_KEY = "AIzaSyDVgNbO40smsbGwLv-mtYnMJ-VNsEogLbI";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent{

  currentVideo: string = 'CNLVZjBE08g';


}
