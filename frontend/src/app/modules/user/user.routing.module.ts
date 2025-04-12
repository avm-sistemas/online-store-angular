import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { RescueComponent } from './components/rescue/rescue.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'rescue', component: RescueComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
