import { Component, OnInit, ViewChild } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  
  constructor() { }

     myFunction1() {
      alert(location.hostname);
    }
   
       myFunction2() {
  confirm("Press a button!");
}
    
        myFunction3() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
        
           myFunction4() {
            confirm("hello"     
            +" how r u" );
          }
          
         myFunction5() {
          swal.fire('Hey user!', 'I Love you.', 'warning');


          }

  

  ngOnInit() {
  }

}
