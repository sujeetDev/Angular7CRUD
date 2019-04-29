import { Routes, RouterModule } from "@angular/router";

import {indexComponent} from './index.component';

const childRoutes:Routes=[
    {
        path:'',
        component:indexComponent
    }
]

export const indexRouting=RouterModule.forChild(childRoutes);