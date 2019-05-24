import {Component, OnInit} from  '@angular/core';
import {UserServices} from '../../../../../services/userLoging.services';
import {user} from '../../../../../models/userModel';
import {loginModel} from '../../../../../models/loginModel';
import {MessageService} from '../../../../../services/message.service';

@Component({
    selector:'listInvoice-app',
    templateUrl:'./listInvoice.component.html'
})

export class listInvoiceComponent implements OnInit{
    constructor(private api:UserServices, private messageService:MessageService){}

    colorTheme = 'orange';
    listData:user[]=[];
    singleData:user;

    ngOnInit(){
        this.sendMessage();
        this.getUserById();
        this.getAllUser();
    }

    sendMessage():void{
        this.messageService.sendMessage("List Invoice Page");
      }

    getUserById(){
        this.api.getUserById(2)
        .subscribe(data=>{
            this.singleData=data;
        },(err)=>{
            console.log(err);
        })
    }

    getAllUser(){
        this.api.getUsers()
        .subscribe(data=>{
            this.listData=data;
        })
    }

    deleteUser(Id:number){
        this.api.deleteUser(Id)
        .subscribe(data=>{
            this.getAllUser();
        })
    }
}