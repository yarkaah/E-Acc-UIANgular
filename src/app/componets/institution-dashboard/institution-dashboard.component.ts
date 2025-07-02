import { Component } from '@angular/core';

@Component({
  selector: 'app-institution-dashboard',
  templateUrl: './institution-dashboard.component.html',
  styleUrls: ['./institution-dashboard.component.css']
})
export class InstitutionDashboardComponent {
  activeView: string = '';

  setView(view: string) {
    this.activeView = view;
  }
}
