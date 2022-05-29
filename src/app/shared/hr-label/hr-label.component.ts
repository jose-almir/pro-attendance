import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-label',
  templateUrl: './hr-label.component.html',
  styleUrls: ['./hr-label.component.scss'],
})
export class HrLabelComponent implements OnInit {
  @Input() label: string = '';

  constructor() {}

  ngOnInit(): void {}
}
