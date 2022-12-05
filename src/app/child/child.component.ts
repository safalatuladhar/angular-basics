import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('cards') cardArr: string[] = [];
  @Output('deleteEvent') cardDel = new EventEmitter<number>();
  constructor(){}

delCard(index: number){
  this.cardDel.emit(index);

}
  
}
