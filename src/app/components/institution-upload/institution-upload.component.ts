import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService, UserDTO } from 'src/app/services/user.service';
import { InstitutionService } from 'src/app/services/institution.service';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-institution-upload',
  templateUrl: './institution-upload.component.html',
  styleUrls: ['./institution-upload.component.css']
})
export class InstitutionUploadComponent implements OnInit {
  uploadForm!: FormGroup;
  users: UserDTO[] = [];
  filteredUsers!: Observable<UserDTO[]>;
  selectedFile: File | null = null;
  message = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private institutionService: InstitutionService
  ) {}

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      userEmail: ['', Validators.required],
      file: [null, Validators.required]
    });

    this.userService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
        this.filteredUsers = this.uploadForm.get('userEmail')!.valueChanges.pipe(
          startWith(''),
          map(value => this.filterUsers(value || ''))
        );
      },
      error: () => {
        this.message = 'Failed to load users';
      }
    });
  }

  private filterUsers(query: string): UserDTO[] {
    const filterValue = query.toLowerCase();
    return this.users.filter(user =>
      user.email.toLowerCase().includes(filterValue)
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.uploadForm.patchValue({ file });
    }
  }

  onUpload(): void {
    if (this.uploadForm.invalid || !this.selectedFile) return;

    const selectedEmail = this.uploadForm.value.userEmail;
    const selectedUser = this.users.find(u => u.email === selectedEmail);

    if (!selectedUser) {
      this.message = 'User not found';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile!);

    this.institutionService.uploadDocumentForUser(selectedUser.id, formData)
      .subscribe({
        next: () => this.message = 'Document uploaded successfully!',
        error: () => this.message = 'Failed to upload document'
      });
  }
}
