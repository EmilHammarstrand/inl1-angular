import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UserInfoService} from '../user-info.service';
import { ThrowStmt, createOfflineCompileUrlResolver } from '@angular/compiler';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.css']
})

export class DialougeComponent implements OnInit {
  firstName: string;
  lastName: string;
  buttonPressValue = "";
  showMyContainer: boolean = false;

  refreshPage(){
    window.location.reload();
  }

  saveBtn(event: any): void {
    event.target.disabled = true;
    console.log("btn clicked: " + this.firstName + this.lastName);
    window.localStorage.setItem("firstName", this.firstName);
    window.localStorage.setItem("lastName", this.lastName);
    window.localStorage.getItem("firstName"); // TODO: lägg i service.
    window.localStorage.getItem("lastName"); // TODO: lägg i service.
    this.buttonPressValue = this.firstName + " " + this.lastName;

    if(document.forms["frm"].answer.value === ""){
      this.showMyContainer = false;
      console.log("it works");
    }else{
     // event.target.disabled = true; // TODO: om båda input fälten är ifyllda disable knappen.
      this.showMyContainer = true;  
    }

    /* if( window.localStorage.getItem("firstName" && "lastName") === null){
      this.saveBtn = 
    } */
  };

  clearStorage(){
    localStorage.clear();
    console.log("ls cleared");
    this.buttonPressValue = "";
  };
  

  constructor() { }

  ngOnInit(): void {
    
  }

}