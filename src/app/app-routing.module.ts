import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {pageNotFoundComponent} from './pagenotfound.component';

const routes: Routes = [
  {
    path : '',
    loadChildren : './home/home.module#HomeModule'
}
,    
{
 path: '**',
 component: pageNotFoundComponent,
 pathMatch: 'full' 
}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
