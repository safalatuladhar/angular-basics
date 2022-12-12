import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PeriodicElement } from './interface/periodic-element';
import AuthServiceService from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

  observable: Observable<number>;

  ngOnInit(): void {
    // initializing an observable
    this.observable = new Observable(subscriber => {
      // emitting next value
      subscriber.next(101);
      // emitting value 5 after 5 seconds
      setTimeout(() => subscriber.next(5), 5000);
      subscriber.next(1);
      setTimeout(() => {
        // after 7 seconds emitting value 66
        subscriber.next(66);
        // after 7 seconds completing the observable meaning observable is done emitting the value
        subscriber.complete();
      }, 7000);
    });
  }

  }

