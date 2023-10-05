import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalLoginComponent } from './principal-login.component';

describe('PrincipalLoginComponent', () => {
  let component: PrincipalLoginComponent;
  let fixture: ComponentFixture<PrincipalLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalLoginComponent]
    });
    fixture = TestBed.createComponent(PrincipalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
