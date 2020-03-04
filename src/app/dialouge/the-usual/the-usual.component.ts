import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../../user-info.service';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
    theUsual(){

    } //the usual button

  constructor(private UIS: UserInfoService) { }

  ngOnInit(): void {
  }

}
