import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login.component';
import { authRouting } from './auth.routing';
import { SignUpComponent } from './signup.component';
import { Router, RouterOutlet } from '@angular/router';
import { LogoutComponent } from './logout.component';
import {MessagesModule} from 'primeng/primeng';
import {MessageModule} from 'primeng/primeng';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
      LoginComponent,
      SignUpComponent,
      LogoutComponent
  ],
  imports:[
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    authRouting,
    MessagesModule,
    MessageModule
  ],
  exports:[
      LoginComponent,
      SignUpComponent,
      LogoutComponent
  ],
  providers: [AuthService]
})
export class AuthModule { }