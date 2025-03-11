import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact';
import { JsonPipe } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,JsonPipe,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample';

  contacts : Contact[] =[{
    "id": 1,
    "name": "John",
    "location":"kochi",
  },{
    "id": 2,
    "name": "Rahul",
    "location":"kollam",
  }];

  selectedContact :Contact={id:0,name:"",location:""}
  onSelect(contact:Contact){
    this.selectedContact=contact;
  }
}
