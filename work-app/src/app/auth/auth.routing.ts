import { Routes, RouterModule } from "@angular/router";
import { SignUpComponent } from "./signup.component";
import { LoginComponent } from "./login.component";
import { HomeComponent } from "../home/home.component";



const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'signup', component: SignUpComponent },
    { path: 'login' , component: LoginComponent },
    { path: 'home' , component: HomeComponent }
];

export const authRouting = RouterModule.forChild(AUTH_ROUTES);