import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import{ FormsModule } from '@angular/forms'; // for using ngModel
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './TodoLab/details/details.component';
import { ListComponent } from './TodoLab/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule // add here too
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
