import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

cards: string[] = [];
deletedCards: any;;

addCard(cardItem: string){
  this.cards.push(cardItem);
}

removeCard(indexCard: number){
 this.deletedCards = this.cards[indexCard];
 this.cards = this.cards.filter((val,index) =>index!== indexCard);

}

  }

