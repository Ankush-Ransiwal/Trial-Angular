import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-heading',
  templateUrl: './input-heading.component.html',
  styleUrls: ['./input-heading.component.css']
})
export class InputHeadingComponent implements OnInit {
  @Input() inputHeading : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
