import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { SklepComponent } from './components/sklep/sklep.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { DetailItemComponent } from './components/detail-item/detail-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { WearService } from './services/wear.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoutingModule } from './routes/routing.module'

@NgModule({
  declarations: [
    AppComponent,
    SklepComponent,
    AddItemComponent,
    DetailItemComponent,
    EditItemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RoutingModule
  ],
  providers: [WearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
