import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';

import {indexComponent} from './index.component';
import {indexRouting} from './index.routing';


@NgModule({
    imports:[CommonModule,indexRouting, BsDatepickerModule.forRoot(),ModalModule.forRoot()],
    declarations:[indexComponent]
})

export class indexModule{

}