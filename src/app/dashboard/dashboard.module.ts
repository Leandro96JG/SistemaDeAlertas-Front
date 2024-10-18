import { RouterModule } from '@angular/router';
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
import { NewPlantComponent } from './components/global/new-plant/new-plant.component';
import { TableAlertComponent } from './components/global/table-alert/table-alert.component';
import { AccionOptionComponent } from './components/shared/accion-option/accion-option.component';
import { LenguageOptionComponent } from './components/shared/lenguage-option/lenguage-option.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    LayoutComponent,
    MonitoreoGlobalComponent,
    MonitoreoPlantaComponent,
    NavBarComponent,
    AlertCardComponent,
    HeaderComponent,
    UserHeaderComponent,
    NewPlantComponent,
    TableAlertComponent,
    AccionOptionComponent,
    LenguageOptionComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    TranslateModule,
  ]
})
export class DashboardModule { }
