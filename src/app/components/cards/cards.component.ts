import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {



constructor() {}

  ngOnInit(): void {
    
  }
  imageHide = "hide";
  url = "";
  image_src = "";
  image_name = "";
  current_image = "";

  // imageArray = [{}];

  image = new Map();

  // addNew(){
  //   this.myArray.push(this.myArray.length + 1);
  //   console.log(this.myArray);
  // }

  onClick(img_name: string, img_src: string){
    console.log(img_name);
    this.image.set(img_name, img_src);
    this.url = "Image " + img_name +  " added successfully.";
    console.log(this.url);
    
  }

  display(img_detail : string){
    if(this.image.has(img_detail)){
      this.current_image =  img_detail + 'found';
      this.current_image = this.image.get(img_detail);

    }
    else{
      this.current_image = "Not Found"
      this.current_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYpUPzpFVGfKoeVxGtHQ5LxnlrE8uPiTzTOgPjbIzPA&s"
    }
    console.log(this.current_image);

    // this.imageHide = "";
  }

}
