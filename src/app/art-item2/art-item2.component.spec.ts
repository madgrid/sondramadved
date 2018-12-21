import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtItem2Component } from './art-item2.component';

describe('ArtItem2Component', () => {
  let component: ArtItem2Component;
  let fixture: ComponentFixture<ArtItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
