import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ConstituencyService {

  constructor(private http: HttpClient) { }

  // add user

  public addUser(constituency:any){
    return this.http.post(`${baseUrl}/ps/`,constituency)
  }
}
