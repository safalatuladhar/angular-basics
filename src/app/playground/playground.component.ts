import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent  implements OnInit{
Username:String='';
  ngOnInit(): void {
  }

  onReset(){
    this.Username = "";
  }
  

}
