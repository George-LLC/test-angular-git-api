import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})

export class SearchFieldComponent implements OnInit {

  @Output() onChangedValue = new EventEmitter<boolean>();
  inputValue: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeValue(value: any) {
    this.onChangedValue.emit(value);
  }

  routerNavigate() {
    this.router.navigate(['home/search-result'], {state: {inputValue: this.inputValue}, queryParams: {page: 2, per_page: 100}});
  }

}
