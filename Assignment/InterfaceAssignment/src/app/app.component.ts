import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InterfaceAssignment';

  Task:Task[] = [
    {TaskName: 'Task 1', Description: 'Description 1', Status: 'Status 1'},
    {TaskName: 'Task 2', Description: 'Description 2', Status: 'Status 2'},
    {TaskName: 'Task 3', Description: 'Description 3', Status: 'Status 3'},
    ];
    }

