// src/app/components/institution-logs/institution-logs.component.ts
import { Component, OnInit } from '@angular/core';
import { AccessLog, AccessLogService } from 'src/app/access-log.service';
import { UserService, UserDTO } from 'src/app/services/user.service';

@Component({
  selector: 'app-institution-logs',
  templateUrl: './institution-logs.component.html',
  styleUrls: ['./institution-logs.component.css']
})
export class InstitutionLogsComponent implements OnInit {

  users: UserDTO[] = [];
  selectedUserId = '';
  logs: AccessLog[] = [];
  loading = false;
  error = '';

  constructor(
    private accessLogService: AccessLogService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (res) => this.users = res,
      error: () => this.error = 'Failed to load users'
    });
  }

  onUserChange(): void {
    if (!this.selectedUserId) return;

    this.loading = true;
    this.logs = [];

    this.accessLogService.getFormattedLogsByUser(this.selectedUserId).subscribe({
      next: (data) => {
        this.logs = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load logs';
        this.loading = false;
      }
    });
  }
}
