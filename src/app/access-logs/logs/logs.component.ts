import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {

  email:string = '';
  password : string = '';
  error : string = '';

  login() : void{
     // This is placeholder logic — replace with real auth logic later
     if(this.email==='admin@example.com' && this.password==='admin'){
      this.error = '';
      console.log('login successful')
     }else{
      this.error = 'invalid email or password';
     }
  }

}
