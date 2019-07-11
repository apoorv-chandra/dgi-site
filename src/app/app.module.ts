import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './src/components/body/body.component';
import {MatButtonModule, MatCheckboxModule, MatDividerModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { AffliationComponent } from './src/components/body/affliation/affliation.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    AffliationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
