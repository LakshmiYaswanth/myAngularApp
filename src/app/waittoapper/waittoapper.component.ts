import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waittoapper',
  templateUrl: './waittoapper.component.html',
  styleUrls: ['./waittoapper.component.css']
})
export class WaittoapperComponent implements OnInit {

  constructor() { }
   showBuyNow() { 
    setTimeout(function(){document.getElementById("BuyNow").style.display = "inline"; }, 30)
  
}

//this calls the function above, 3000 milliseconds is 3 seconds, adjust here to make it a longer interval

  ngOnInit() {
  }

}
