import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts!:Account[]
  errorMessage!:Object

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.getAccountsControllers()
  }
getAccountsControllers(){
  this.accountService.getAccountsService().subscribe({

    next:data=>{      
      this.accounts=data;
      console.log(this.accounts)
     },
       error:err => {console.log(err);
      this.errorMessage=err}   
     
       
  });
 }
      
  }

