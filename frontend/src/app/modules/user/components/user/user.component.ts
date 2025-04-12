import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base.components';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    console.log('user!');    
  }
}
