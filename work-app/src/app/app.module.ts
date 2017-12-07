import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRouting } from './app.routing';
import { HomeModule } from './home/home.module';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AuthModule,
    AppRouting,
    HomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
