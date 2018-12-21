import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtMoreComponent } from './art-more.component';

describe('ArtMoreComponent', () => {
  let component: ArtMoreComponent;
  let fixture: ComponentFixture<ArtMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
