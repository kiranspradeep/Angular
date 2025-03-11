import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Trainee } from '../trainee';
@Component({
  selector: 'app-trainee-details',
  imports: [UpperCasePipe,JsonPipe],
  templateUrl: './trainee-details.component.html',
  styleUrl: './trainee-details.component.css'
})
export class TraineeDetailsComponent {

  @Input()trainee?:Trainee;

}
