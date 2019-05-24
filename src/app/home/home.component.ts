import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import {MessageService} from '../services/message.service';

@Component({
    selector:'home-app',
    templateUrl:'./home.component.html'
})

export class homeComponent implements OnInit, OnDestroy{
    constructor(private messageService : MessageService){
        this.subscription=this.messageService.getMessage().subscribe(message=>{
            if(message){
                this.pageName=message;
            }
        })
    }

    pageName:string;
    subscription:Subscription;

    ngOnInit(){

    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}