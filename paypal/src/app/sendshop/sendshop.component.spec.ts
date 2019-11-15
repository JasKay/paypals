import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendshopComponent } from './sendshop.component';

describe('SendshopComponent', () => {
  let component: SendshopComponent;
  let fixture: ComponentFixture<SendshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
