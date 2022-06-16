import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  faAdd = faAdd;
  constructor() { }

  ngOnInit(): void {
  }

}
