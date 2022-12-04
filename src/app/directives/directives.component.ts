import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  data=[
    {
      username:'ram',
      address:'ktm',
      age:'15'
    },
      {
      username:'shyam',
      address:'patan',
      age:'12'
    },
      {
      username:'gita',
      address:'dallu',
      age:'25'
    },
      {
      username:'jack',
      address:'bhaktapur',
      age:'28'
    },
     {
      username:'john',
      address:'ktm',
      age:'34'
    }
  ]

  checkAge(person: any): boolean{
    return person.age < 20;
  }

}
