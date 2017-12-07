import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login.component";
import { HomeComponent } from "./home/home.component";



const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent , loadChildren: './auth/auth.module#AuthModule' },
    { path: 'home', component: HomeComponent}
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);