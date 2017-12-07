
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


export interface Car {
    vin : string; 
    year : number;
    brand : string;
    color : string;
}

@Injectable()
export class HomeService {

    private cars : Car[] = [];

    constructor(private http: Http) {}

    getCars() : Observable<Car[]> {
        return this.http.get('http://localhost:3000/cars')
        .map((response:Response)=>{
            const cars = response.json().obj;
            return cars;
        }); 
    }
} 