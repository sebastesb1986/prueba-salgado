import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(){
    //string literal
    return this.http.get(`${environment.url}user`);
  }

  saveUser(data:User){
    //string literal
    return this.http.post(`${environment.url}user/store`, data);
  }

  updateUser(data:User){
    //string literal
    console.log(data);

    return this.http.put(`${environment.url}user/${data.id}/update`,data);
  }

  deleteUser(data:User){
    //string literal
    console.log(data);
    return this.http.delete(`${environment.url}user/${data}/delete`);
  }
  
}
