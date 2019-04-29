import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { homeComponent } from './home.component';

const routes:Routes=[
    {
        path:'',
        component:homeComponent,
        children:[
            {path:'', redirectTo:'index', pathMatch:'full'},
            {path:'index', loadChildren:'./index/index.module#indexModule'},
            {path:'sales', loadChildren:'./sales/sales.module#salesModule'}
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRouting{}