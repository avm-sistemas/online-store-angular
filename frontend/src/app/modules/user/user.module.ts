import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RescueComponent } from './components/rescue/rescue.component';
import { UserRoutingModule } from './user.routing.module';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RescueComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
