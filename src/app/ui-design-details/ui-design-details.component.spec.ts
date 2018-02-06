import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDesignDetailsComponent } from './ui-design-details.component';

describe('UiDesignDetailsComponent', () => {
  let component: UiDesignDetailsComponent;
  let fixture: ComponentFixture<UiDesignDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiDesignDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDesignDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
