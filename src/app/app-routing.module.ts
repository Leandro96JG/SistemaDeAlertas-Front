import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'',
    redirectTo:'/auth',
    pathMatch:'full'
  },
  {
    path:'**',
    component:NotPageFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
