import {Routes, RouterModule} from '@angular/router';
import {salesComponent} from './sales.component';

import {createInvoiceComponent} from './component/invoice/create/createInvoice.component';
import {listInvoiceComponent} from './component/invoice/list/listInvoice.component';
import {createQuotationComponent} from './component/quotation/create/createQuotation.component';
import {listQuotationComponent} from './component/quotation/list/listQuotation.component';

const childRoutes:Routes=[
    {
        path:'',
        component:salesComponent,
        children:[
            { path: '', redirectTo: 'createInvoice', pathMatch: 'full' },
            {path:'createInvoice', component:createInvoiceComponent},
            {path:'listInvoice', component:listInvoiceComponent},
            {path:'createQuotation',component:createQuotationComponent},
            {path:'listQuotation',component:listQuotationComponent}
        ]
    }
]

export const salesRouting= RouterModule.forChild(childRoutes);