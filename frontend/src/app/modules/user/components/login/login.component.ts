import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base.components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {  
  ngOnInit(): void {
    console.log('login!');
  }
}
