import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  baseApi=environment.baseApi;
  constructor(private http:HttpClient) { }

  getCustomersService():Observable<Customer[]>{
  return this.http.get<Customer[]>(`${this.baseApi}/customers`)
  }
}
