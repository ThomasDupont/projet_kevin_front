import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientsDetailsComponent } from './gradients-details.component';

describe('GradientsDetailsComponent', () => {
  let component: GradientsDetailsComponent;
  let fixture: ComponentFixture<GradientsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
