import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseApi=environment.baseApi;
  constructor(private http:HttpClient) { }

  getAccountsService():Observable<Account[]>{
  return this.http.get<Account[]>(`${this.baseApi}/accounts`)
  }
}
