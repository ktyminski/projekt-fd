import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../components/dashboard/dashboard.component';
import { SklepComponent }      from '../components/sklep/sklep.component';
import { DetailItemComponent }  from '../components/detail-item/detail-item.component';
import { AddItemComponent } from '../components/add-item/add-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'clothes',
    component: SklepComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: DetailItemComponent
  },
  {
    path: 'additem',
    component: AddItemComponent
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
