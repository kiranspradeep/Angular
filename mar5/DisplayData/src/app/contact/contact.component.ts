import { Component } from '@angular/core';
import { Contact } from './contact';
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contacts: Contact[] = [{
    name: 'kiran',
    location: 'Kerala',
    college: 'MCAS'
  }, {
    name: 'Abhinand',
    location: 'Kerala',
    college: 'MCAS'
  },{
    name: 'abhijith',
    location: 'Kerala',
    college: 'MCAS'
  }]}
// export class ContactComponent {
//   contact: Contact = { name: 'Kiran', location: 'Kerala' }; // Type-safe
// }