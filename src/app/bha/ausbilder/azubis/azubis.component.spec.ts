import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzubisComponent } from './azubis.component';

describe('AzubisComponent', () => {
  let component: AzubisComponent;
  let fixture: ComponentFixture<AzubisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzubisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzubisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
