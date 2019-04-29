import {Component, OnInit} from '@angular/core';
//import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {UserServices} from '../../../../../services/userLoging.services';
import {user} from '../../../../../models/userModel';

import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector:'createInvoice-app',
    templateUrl:'./createInvoice.component.html'
})

export class createInvoiceComponent implements OnInit{
   
    constructor(private router: Router, private api:UserServices, private formBuilder: FormBuilder) { }
        
    userForm:FormGroup;
    //userModel:user;
    //FirstName="";
    //Address="";
    //Email="";
    isSubmitted  =  false;
    ngOnInit(){
       this.userForm=this.formBuilder.group({
        FirstName:['', Validators.required],
        Address:[''],
        Email:['',Validators.required]
       })
    }
    
    AddUser(form:NgForm){
        this.isSubmitted = true;
        if(this.userForm.invalid){
            return;
        }
        this.api.addUser(form)
        .subscribe((res)=>{
            this.router.navigate(['/sales/listInvoice']);
        })
    }
    get formControls() { return this.userForm.controls; }
    
}