import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionUserDocsComponent } from './institution-user-docs.component';

describe('InstitutionUserDocsComponent', () => {
  let component: InstitutionUserDocsComponent;
  let fixture: ComponentFixture<InstitutionUserDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionUserDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionUserDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
