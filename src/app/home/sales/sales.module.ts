import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {salesComponent} from './sales.component';
import {salesRouting} from './sales.routing';
import {createInvoiceComponent} from './component/invoice/create/createInvoice.component';
import {listInvoiceComponent} from './component/invoice/list/listInvoice.component';
import {createQuotationComponent} from './component/quotation/create/createQuotation.component';
import {listQuotationComponent} from './component/quotation/list/listQuotation.component';

import{UserServices} from '../../services/userLoging.services';

import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

@NgModule({
imports:[salesRouting,CommonModule,FormsModule,ReactiveFormsModule],
declarations:[salesComponent,createInvoiceComponent,listInvoiceComponent,createQuotationComponent,listQuotationComponent],
providers:[UserServices]
})

export class salesModule{

}