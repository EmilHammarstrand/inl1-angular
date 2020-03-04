import { Component, OnInit } from '@angular/core';
import { selectBeverage } from "../interface-beverage";
import { UserInfoService} from "../../user-info.service";

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
    beverageToDisplay: string;
    showBeverageContainer: boolean = false;

    selectedBeverage(p){
      this.showBeverageContainer = true;
      this.beverageToDisplay = p;
      this.UIS.setThisItemBeverage(this.beverageToDisplay);
      this.UIS.getThisItemBeverage();

    }

    beverages: selectBeverage[] = [
      { id: 1, drink: "Beer" },
      { id: 2, drink: "Coffin Varnish" },
      { id: 3, drink: "Red Eye" },
      { id: 4, drink: "Tarantula Juice" },
      { id: 4, drink: "Firewater" }
    ];

  constructor(private UIS: UserInfoService) {}

  ngOnInit(): void {}


}
