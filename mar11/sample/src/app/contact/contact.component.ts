import { Component, Input } from '@angular/core';
import { Contact } from '../contact';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [JsonPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
@Input() contact?:Contact
}
