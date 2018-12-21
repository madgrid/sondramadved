import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtItem3Component } from './art-item3.component';

describe('ArtItem3Component', () => {
  let component: ArtItem3Component;
  let fixture: ComponentFixture<ArtItem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtItem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
