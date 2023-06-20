import { Component } from '@angular/core';

@Component({
  selector: 'app-new-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseName: string;
  author: string;
  imgSrc: string;
  competition: string;
  workerName: string;
  workerAge: number;
  isTrue: boolean;
  width: number;
  values: number;
  data = [
    {
      name: 'Pablo',
      job: 'FullStack Dev',
      age: 32
    },
    {
      name: 'Eva',
      job:  'Front-Dev',
      age: 22
    },
    {
      name: 'Izzak',
      job: 'Senior Angular Dev',
      age: 44
    },
    {
      name: 'Luiza',
      job: 'RoR Dev',
      age: 36
    }
  ]

  constructor() {
    this.courseName = 'Angular'
    this.author = 'Pablo Z.'
    this.imgSrc = 'https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80'
    this.competition = 'New Competition 2023'
    this.workerName = '';
    this.workerAge = 0;
    this.isTrue = false;
    this.width = 2;
    this.values = 1;

  }
}
