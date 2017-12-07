import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DataTableModule,SharedModule} from 'primeng/primeng';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { HomeService } from './home.service';


@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      AuthModule,
      DataTableModule,
      SharedModule
    ],
    providers: [HomeService]
  })
  export class HomeModule { }
  