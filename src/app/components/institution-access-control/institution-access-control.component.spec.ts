import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionAccessControlComponent } from './institution-access-control.component';

describe('InstitutionAccessControlComponent', () => {
  let component: InstitutionAccessControlComponent;
  let fixture: ComponentFixture<InstitutionAccessControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionAccessControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionAccessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
