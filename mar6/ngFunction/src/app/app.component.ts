import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Trainee } from './trainee';
import { TraineeDetailsComponent } from "./trainee-details/trainee-details.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe, TraineeDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngFunction';
  traniees:Trainee[]=[{
    name:'kiran',location:'koyilandy',college:'jabaaah'
  },
  {
    name:'pranav',location:'kollam',college:'AHh'
    },
    {
      name:'abhinand',location:'payolli',college:'macas'
      }
];


selectedtraniee :Trainee={name:'', location:'', college:''}

onSelect(trainee: Trainee){
  this.selectedtraniee = trainee;
  }


  // getTrainee():Trainee[]{
  //   return this.traniees;
  // }
}
