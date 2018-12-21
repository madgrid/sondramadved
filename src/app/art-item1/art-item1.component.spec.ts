import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtItem1Component } from './art-item1.component';

describe('ArtItem1Component', () => {
  let component: ArtItem1Component;
  let fixture: ComponentFixture<ArtItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
