import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';  
import { Observable, from, of } from 'rxjs'; 
import { catchError, tap, map } from 'rxjs/operators';
import {HostName} from '../shared/appSetting';
import {APIUrl} from './APIs';
import {user} from '../models/userModel';
import {loginModel} from '../models/loginModel';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({  
    providedIn: 'root'  
  })
  
  export class UserServices{
     
    constructor(private http: HttpClient) {
       
     } 
     baseUrl=    HostName.API_StartPoint;
     
     private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    userLogin (LoginModel: any): Observable<loginModel> {
      return this.http.post<loginModel>(this.baseUrl+APIUrl.UserLogin, LoginModel, httpOptions).pipe(
        tap((supplierRes: loginModel) => console.log(`user name=${supplierRes.UserName}`)),
        catchError(this.handleError<loginModel>('login'))
      );
    }
    
    
    
    getUsers (): Observable<user[]> {
      return this.http.get<user[]>(this.baseUrl+APIUrl.GetAllUser)
        .pipe(
          tap(heroes => console.log('fetched Suppliers')),
          catchError(this.handleError('getSuppliers', []))
        );
    }

    getUserById(id: number): Observable<user> {
      const url = `${this.baseUrl+APIUrl.GetUserById}/${id}`;
      return this.http.get<user>(url).pipe(
        tap(_ => console.log(`fetched Supplier id=${id}`)),
        catchError(this.handleError<user>(`getUserById id=${id}`))
      );
    }

    addUser(userModel:any):Observable<user>{
      return this.http.post<user>(this.baseUrl+APIUrl.AddUser, userModel, httpOptions)
      .pipe(tap((result:user)=>console.log("added")),
      catchError(this.handleError<user>('Added'))
      );
    }

    deleteUser(Id:number):Observable<ResponseModel>{
      const url = `${this.baseUrl+APIUrl.DeleteUser}/${Id}`;
      return this.http.delete<ResponseModel>(url, httpOptions).pipe(
        tap(_=>console.log("Deleted"),
        catchError(this.handleError<ResponseModel>('Delete user')))
      )
    }


  }



  export class ResponseModel {  
    result:boolean 
}  