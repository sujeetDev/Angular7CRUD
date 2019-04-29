import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HomeRouting } from './home.routing';
import { homeComponent } from './home.component';



@NgModule({
    imports:[CommonModule,HomeRouting],
    declarations:[homeComponent],
    providers:[]
   

})

export class HomeModule{}