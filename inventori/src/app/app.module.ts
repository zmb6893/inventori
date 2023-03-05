import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoriTableComponent } from './inventori-table/inventori-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { WeightConfirmationComponent } from './weight-confirmation/weight-confirmation.component';
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 

@NgModule({
  declarations: [
    AppComponent,
    InventoriTableComponent,
    StatusBarComponent,
    WeightConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
