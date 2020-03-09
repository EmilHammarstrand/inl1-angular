import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    
    @Output() onSelectBeverage: EventEmitter<string> = new EventEmitter();
  

    selectedBeverage(p: string){
      this.showBeverageContainer = true;
      this.beverageToDisplay = p;
      this.UIS.setThisItemBeverage(this.beverageToDisplay);
      this.UIS.getThisItemBeverage();
      this.onSelectBeverage.emit(this.beverageToDisplay);
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
