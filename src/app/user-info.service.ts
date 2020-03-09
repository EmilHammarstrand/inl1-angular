import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  

  
  saveName(firstname: string, lastname: string){
    window.localStorage.setItem("firstName", firstname);
    window.localStorage.setItem("lastName", lastname);
  }

  getName() {
    let firstName = window.localStorage.getItem("firstName");
    let lastName = window.localStorage.getItem("lastName");

    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  clearStorage(){
    localStorage.clear();
  }

  setThisItemBeverage(beverageToDisplay: string){
    window.localStorage.setItem("choosenBeverage", beverageToDisplay);
  }

  getThisItemBeverage(){
    let choosenBeverage = window.localStorage.getItem("choosenBeverage");
    return choosenBeverage;
  }

  constructor() {}
}
