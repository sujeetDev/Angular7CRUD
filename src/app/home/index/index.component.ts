import { Component, OnInit ,TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {MessageService} from '../../services/message.service';

@Component({
    selector:'index-app',
    templateUrl:'./index.component.html'
})

export class indexComponent implements OnInit{
    modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private messageService:MessageService) {}

    ngOnInit(){
      this.sendMessage();
    }

    sendMessage():void{
      this.messageService.sendMessage("Home Page");
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }
}