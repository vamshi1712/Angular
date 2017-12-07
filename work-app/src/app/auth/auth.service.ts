import {Injectable} from '@angular/core';
import { User } from './user.model';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";

@Injectable()

export class AuthService {
    user : User;
    message : string;

    BaseUrl = 'http://localhost:3000/user';

    constructor(public http : Http ){}

    login(user){
        const body = JSON.stringify(user);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post(`${this.BaseUrl}`,body,{headers:headers})
                .map((response:Response)=>response.json())
                .catch((error: Response) => {
                    return Observable.throw(error.json());
                });
                
        }

    signup(user){
        const body = JSON.stringify(user);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post(`${this.BaseUrl}`+'/signup',body,{headers:headers})
                    .map((respose:Response)=>respose.json());
    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }

}