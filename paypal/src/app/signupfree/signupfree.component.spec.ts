import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupfreeComponent } from './signupfree.component';

describe('SignupfreeComponent', () => {
  let component: SignupfreeComponent;
  let fixture: ComponentFixture<SignupfreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupfreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupfreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
