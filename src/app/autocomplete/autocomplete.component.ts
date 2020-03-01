import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  constructor() { }
  myControl = new FormControl();
  options: string[] = ['cricket', 'football', 'hockey',"gulf","basket ball"];

  ngOnInit() {
  }

}
