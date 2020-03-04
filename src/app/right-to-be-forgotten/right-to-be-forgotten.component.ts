import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../user-info.service';

@Component({
  selector: 'app-right-to-be-forgotten',
  templateUrl: './right-to-be-forgotten.component.html',
  styleUrls: ['./right-to-be-forgotten.component.css']
})
export class RightToBeForgottenComponent implements OnInit {
  /* whoAreYou: string = "Got it. Who are you again?";
  showMyContainer2: boolean = false;

  clearMe(){
    this.showMyContainer2 = true;
    this.UIS.clearStorage();
    this.whoAreYou;
  }
  constructor(private UIS: UserInfoService) { } */

  ngOnInit(): void {
  }
}
