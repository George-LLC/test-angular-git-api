import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputValue: any;

  constructor() { }

  ngOnInit(): void {
  }

  // get input value
  getValue(value: any) {
    this.inputValue = value;
  }

}
