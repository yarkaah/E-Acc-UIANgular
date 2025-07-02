import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionUploadComponent } from './institution-upload.component';

describe('InstitutionUploadComponent', () => {
  let component: InstitutionUploadComponent;
  let fixture: ComponentFixture<InstitutionUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
