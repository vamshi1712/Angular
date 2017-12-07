import {Component} from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'logout',
    templateUrl: './logout.component.html'
})

export class LogoutComponent {

    constructor(
        public router: Router,
        public authservice: AuthService
    ){}

    Logout(){

        this.authservice.logout();
        this.router.navigate(['login']);

    }

}