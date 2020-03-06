import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  constructor() { }
  change() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

  ngOnInit() {
  }

}
