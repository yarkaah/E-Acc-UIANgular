import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionLogsComponent } from './institution-logs.component';

describe('InstitutionLogsComponent', () => {
  let component: InstitutionLogsComponent;
  let fixture: ComponentFixture<InstitutionLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
