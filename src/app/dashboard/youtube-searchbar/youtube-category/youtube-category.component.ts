import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-youtube-category',
  templateUrl: './youtube-category.component.html',
  styleUrls: ['./youtube-category.component.css']
})
export class YoutubeCategoryComponent implements OnInit {
  @Input() basic:boolean;
  constructor() {

  }

  ngOnInit() {
  }

}
