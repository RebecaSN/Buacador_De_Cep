import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule}from './material/material.module';
import { PipeTransformPipe } from './Pipe/pipe-transform.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './Components/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiçoService } from './Service/serviço.service';

@NgModule({
  declarations: [
    AppComponent,
    PipeTransformPipe,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiçoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
