import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MonitoreoGlobalComponent } from './pages/global/monitoreo-global.component';
import { MonitoreoPlantaComponent } from './pages/planta/monitoreo-planta.component';

import { AlertCardComponent } from './components/global/alert-card/alert-card.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { UserHeaderComponent } from './components/layout/user-header/user-header.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MonitoreoGlobalComponent,
    MonitoreoPlantaComponent,
    NavBarComponent,
    AlertCardComponent,
    HeaderComponent,
    UserHeaderComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
