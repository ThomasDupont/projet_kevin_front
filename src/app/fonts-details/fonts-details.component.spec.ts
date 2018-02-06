import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsDetailsComponent } from './fonts-details.component';

describe('FontsDetailsComponent', () => {
  let component: FontsDetailsComponent;
  let fixture: ComponentFixture<FontsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
