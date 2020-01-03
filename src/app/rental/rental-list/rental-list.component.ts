import { Component, OnInit } from '@angular/core';
import {RentalService} from '../shared/rental.service';
import { NGXLogger } from 'ngx-logger';
import {Rental} from '../shared/rental.model';
@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  //creating a property 
  rentals: Rental[] = [];
  constructor(private rentalService : RentalService) { 

  }
  
  ngOnInit() {

    const rentalObservable=this.rentalService.getRentals();

    rentalObservable.subscribe(
      (rentals:Rental[]) => {
    
        console.log("executed"+rentals);
        this.rentals=rentals;

      },
      (err)=>{
            },
      ()=>{
        
      });
    
  }

}