import {Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import {CheckboxModule} from 'primeng/primeng';
import { User } from './user.model';
import {Router} from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/catch';


@Component({
    selector: 'LoginForm',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    msgs: any=[];

    myForm : FormGroup;

    constructor(public router : Router,public authservice : AuthService){}

    ngOnInit(){
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
            
        });
    }

    onSubmit(myForm){
        const user = new User(this.myForm.value.email , this.myForm.value.password);
        this.authservice.login(user)
        .subscribe(data => {
            console.log(data.token);
            this.handleSuccess(data,this);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.router.navigate(['/home']);
        },err=>this.handleError(err,this))
        this.myForm.reset();
        
    }

    handleSuccess(data,that){
        console.log('success')
        let message = data.message;
        that.msgs.push({severity:'success', summary:'valid', detail:message});
    }

    handleError(err,that){
        
            let message = err.error.message;
            that.msgs.push({severity:'error', summary:'invalid', detail:message});
        
    }

    gotoSignUp(){
        this.router.navigate(['/signup']);
    }
}
