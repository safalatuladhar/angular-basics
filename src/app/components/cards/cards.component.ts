import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageInfo } from 'src/app/interface/imageInfo.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  size: string = '1px';
  style: string = 'font-size: 1.2rem; color: cornflowerblue;';
  imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBl5jhEoTrEkWj2N8RU5b74RQaqSN41t5P7fv0CwLRFVsMpIH7hNIhsATakpat69F-7WU&usqp=CAU';

image_name = "";

  @Input() titles: string[] = [];
  cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

  @Output() titleEvent$ = new EventEmitter<string>();

  imageArry : ImageInfo[] = [];

  onAddCard(title: string): void {
    this.titleEvent$.emit(title);
  }
  

  constructor() { }

  ngOnInit(): void {
    this.imageArry.push({name : 'test', url: ''});
  }

  addImage(image : ImageInfo)
  {
    this.imageArry.push(image);
    
  }



}