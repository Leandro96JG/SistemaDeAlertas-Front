import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MonitoreoGlobalComponent } from './pages/global/monitoreo-global.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:LayoutComponent,
    children:[
      {
        path:'global',
        component:MonitoreoGlobalComponent,
      },
      {
        path:'',
        redirectTo:'global',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
