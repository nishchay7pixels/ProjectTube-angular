import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayerVideoDescriptionComponent } from './youtube-player-video-description.component';

describe('YoutubePlayerVideoDescriptionComponent', () => {
  let component: YoutubePlayerVideoDescriptionComponent;
  let fixture: ComponentFixture<YoutubePlayerVideoDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubePlayerVideoDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlayerVideoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
