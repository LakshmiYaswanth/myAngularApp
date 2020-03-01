import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  constructor() { }
  my() {
   var myWindow = window.open("", "", "width=100, height=100");
  }
 
     myFunction() {
      var myWindow = window.open("", "", "width=100, height=100");
}
  
      mywindows() {
       var myWindow = window.open("", "", "width=100, height=100");

}
      
         mybom() {
          setTimeout(function(){ var  myWindow = window.open("", "", "width=100, height=100"); }, 5000);
      
        }
        
     



  

  ngOnInit() {
  }

}
