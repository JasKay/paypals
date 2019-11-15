import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurepayComponent } from './securepay.component';

describe('SecurepayComponent', () => {
  let component: SecurepayComponent;
  let fixture: ComponentFixture<SecurepayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurepayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
