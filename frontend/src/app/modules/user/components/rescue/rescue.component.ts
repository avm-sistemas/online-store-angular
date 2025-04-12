import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base.components';

@Component({
  selector: 'app-rescue',
  templateUrl: './rescue.component.html',
  styleUrls: ['./rescue.component.scss']
})
export class RescueComponent extends BaseComponent implements OnInit {  
  ngOnInit(): void {
    console.log('rescue!');
  }
}
