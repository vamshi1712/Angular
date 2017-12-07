import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

import {CheckboxModule} from 'primeng/primeng';
import { User } from './user.model';



@Component({
    selector: 'SignUpForm',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit{
    msgs: any=[];


    myForm : FormGroup;

    constructor(public router : Router, public authservice : AuthService){}

    ngOnInit(){
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required),
            fullname: new FormControl(null,Validators.required)
        });
    }

    onSubmit(myForm){
        const user = new User(this.myForm.value.email , this.myForm.value.password, this.myForm.value.fullname);
        console.log(user);
        this.authservice.signup(user)
            .subscribe(data=>{console.log(data);
                this.msgs.push({severity:'success', summary:'success', detail:"success"});
            });
        this.myForm.reset();
    }

    gotoLogin(){
        this.router.navigate(['/login']);
    }

}
