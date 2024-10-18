import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutComponent } from './layout/layout.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule,
    RouterModule
  ]
})
export class AuthModule { }
