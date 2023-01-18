import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers!:Customer[]
  errorMessage!:string

  constructor(private customerService:CustomersService) { }

  ngOnInit(): void {
    this.getCustomersController()
  }
 getCustomersController(){
  this.customerService.getCustomersService().subscribe({
      next:data=>{      
     this.customers=data;
     console.log(this.customers)
    },
      error:err => {console.log(err);
       this.errorMessage=err.message}   
    
      
 });
}
 
}
