import { Component, OnInit} from '@angular/core';
import {UserInfoService} from '../user-info.service';


@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.css']
})

export class DialougeComponent implements OnInit {
  firstName: string;
  lastName: string;
  summaryNames: string;
  showMyContainer: boolean;
  showMyContainerEditBtn: boolean;
  showMyContainerForm: boolean = true;
  showMyContainerOnReload: boolean = false;
  showMyContainerHeadText: boolean = true;
  allContentExceptUsual: boolean = true;
  theUsualContainer: boolean = false;
  buttonPressValue = "";
  clicked: boolean;
  headText: string = "Howdy, stranger. Haven't seen your face around here before. What's your name?";
  beverageToDisplay: string;
  showBeverageContainer: boolean = false;

  editBtn(){
    this.clicked = false;
    this.firstName = "";
    this.lastName = "";
    this.buttonPressValue = "";
    this.showMyContainerForm = true;
  }

  

  getBeverageFromOutput(beverage: string){
    this.beverageToDisplay = beverage;
    this.showBeverageContainer = true;
  }

  clearMe(){
    this.firstName = "";  
    this.lastName = "";
    this.userInfoService.clearStorage();
    this.headText = "Got it. Who are you again?"
    this.clicked = false;
    this.showMyContainer = false;
  }

  saveBtn(): void {
    this.userInfoService.saveName(this.firstName, this.lastName);
    let names = this.userInfoService.getName();
    
    this.buttonPressValue = names.firstName + " " + names.lastName;

    if(names.firstName === "undefined" || names.lastName === "undefined" || names.firstName === "" || names.lastName === "" || names.firstName === null || names.lastName === null){
      this.showMyContainer = false;
      this.clicked = false;
    } else{
      this.showMyContainerEditBtn = true;
      this.showMyContainer = true;
      this.clicked = true;
    }
  }

  constructor(private userInfoService: UserInfoService) {}

  ngOnInit(): void {

    let names = this.userInfoService.getName();
    this.summaryNames = names.firstName + " " + names.lastName;

    if(names.firstName === null || names.lastName === null || names.firstName === "undefined" || names.lastName === "undefined" || names.firstName === "" || names.lastName === ""){ 
      this.showMyContainerOnReload;
      console.log("Ls is empty");
      this.allContentExceptUsual = true;
    } else {
      this.showMyContainerOnReload = true;
      console.log("Ls is full");
      this.allContentExceptUsual = false;         
    }
  }
}