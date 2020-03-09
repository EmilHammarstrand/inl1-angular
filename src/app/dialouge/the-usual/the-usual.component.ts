import { Component, OnInit} from '@angular/core';
import {UserInfoService} from '../../user-info.service';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
  
  theUsualContainer: boolean = false;
  value: string;
  clicked: boolean;

  theUsual(){
    console.log(localStorage.choosenBeverage);
    this.theUsualContainer = true;
    this.value = localStorage.choosenBeverage;
    this.clicked = true;
  }

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
  }

}
