import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
login_message = 'ברוכים הבאים למערכת פיטוסי!';
remember_me = 'זכור אותי';
login = 'התחבר';
username = 'שם משתמש';
password = 'סיסמה';

}
