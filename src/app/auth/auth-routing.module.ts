import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotPageFoundComponent } from '../pages/not-page-found/not-page-found.component';

const routes: Routes = [
{
  path:'auth',
  component:LayoutComponent,
  children:[
    {
      path:'login',
      component:LoginPageComponent,
    },
    {
      path:'register',
      component:RegisterPageComponent,
    },
    {
      path:'',
      redirectTo:'login',
      pathMatch:'full',
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
