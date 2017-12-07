import { Component, OnInit } from '@angular/core';
import {LogoutComponent} from '../auth/logout.component';
import { Router , Routes , RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Car, HomeService } from './home.service';
import {DataTableModule,SharedModule} from 'primeng/primeng';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Car[];
  cols: any[];


  constructor(public router :Router,
              public authservice:AuthService,
              public homeservice : HomeService) { }

  

  ngOnInit() {
    if(!this.authservice.isLoggedIn()){
        this.router.navigate(['/login']);
    }
    this.homeservice.getCars().subscribe(cars => this.cars = cars);
    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
  ];


  }



}