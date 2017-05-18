import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { SklepComponent } from './sklep/sklep.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SklepComponent,
    AddItemComponent,
    DetailItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
