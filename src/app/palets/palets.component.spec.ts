import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletsComponent } from './palets.component';

describe('PaletsComponent', () => {
  let component: PaletsComponent;
  let fixture: ComponentFixture<PaletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
