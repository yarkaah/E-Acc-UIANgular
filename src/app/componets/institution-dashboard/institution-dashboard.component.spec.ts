import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionDashboardComponent } from './institution-dashboard.component';

describe('InstitutionDashboardComponent', () => {
  let component: InstitutionDashboardComponent;
  let fixture: ComponentFixture<InstitutionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
