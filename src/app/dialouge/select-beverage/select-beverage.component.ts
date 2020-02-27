import { Component, OnInit } from '@angular/core';
import { selectBeverage } from "../interface-beverage";
@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
  
  
  beverage: selectBeverage[] = [
    { type: "Beer" },
    { type: "Soda" },
    { type: "Wine" },
    { type: "Water" }];

  constructor() { }

  ngOnInit(): void {
  }

}
