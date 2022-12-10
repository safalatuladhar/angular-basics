import { Component, Input } from '@angular/core';
import { PeriodicElement } from './interface/periodic-element';
import AuthServiceService from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-first-project';
  constructor(private readonly authService: AuthServiceService) {}


// cards: string[] = [];
// deletedCards: any;;

// addCard(cardItem: string){
//   this.cards.push(cardItem);
// }

// removeCard(indexCard: number){
//  this.deletedCards = this.cards[indexCard];
//  this.cards = this.cards.filter((val,index) =>index!== indexCard);

// }
tableData: PeriodicElement[] = [
    { id: 1, element: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { id: 2, element: 'Helium', weight: 4.0026, symbol: 'He' },
    { id: 3, element: 'Lithium', weight: 6.941, symbol: 'Li' },
    { id: 4, element: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 5, element: 'Boron', weight: 10.811, symbol: 'B' },
    { id: 6, element: 'Carbon', weight: 12.0107, symbol: 'C' },
    { id: 7, element: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { id: 8, element: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { id: 9, element: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { id: 10, element: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  cardsTitle: any;

  onaddCard(title: string) {
    this.cardsTitle.push(title);
  }

  }

