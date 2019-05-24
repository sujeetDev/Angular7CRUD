import {Component, OnInit} from '@angular/core';
//import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {UserServices} from '../../../../../services/userLoging.services';
import {user} from '../../../../../models/userModel';
import {MessageService} from '../../../../../services/message.service';

import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector:'createInvoice-app',
    templateUrl:'./createInvoice.component.html'
})

export class createInvoiceComponent implements OnInit{
   
    constructor(private router: Router, private api:UserServices, private formBuilder: FormBuilder, private messageService:MessageService) { }
        
    userForm:FormGroup;
    singleData:user;    
    //FirstName="";
    //Address="";
    //Email="";
    isSubmitted  =  false;
    ngOnInit(){
        this.sendMessage();
       this.userForm=this.formBuilder.group({
        FirstName:['', Validators.required],
        Address:[''],
        Email:['',[Validators.required, Validators.email]]
       })
       this.getUserById();
    }

    sendMessage():void{
        this.messageService.sendMessage("Create Invoice Page");
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

    getUserById(){
        this.api.getUserById(2)
        .subscribe(data=>{
            this.singleData=data;
        },(err)=>{
            console.log(err);
        })
    }
    
}