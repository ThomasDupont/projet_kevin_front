import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignDetailsComponent } from './web-design-details.component';

describe('WebDesignDetailsComponent', () => {
  let component: WebDesignDetailsComponent;
  let fixture: ComponentFixture<WebDesignDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
