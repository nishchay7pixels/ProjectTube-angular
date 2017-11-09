import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeCategoryComponent } from './youtube-category.component';

describe('YoutubeCategoryComponent', () => {
  let component: YoutubeCategoryComponent;
  let fixture: ComponentFixture<YoutubeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
