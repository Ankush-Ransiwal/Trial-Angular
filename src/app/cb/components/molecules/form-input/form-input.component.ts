import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() placeholder: string;  
  @Output() updateInputText = new EventEmitter();
  @Input() inputHeading : string;
  @Input() displayText : string;
  constructor() { }

  ngOnInit(): void {
  }
  
  child($event:any) {
    const temp : any = event;
    this.displayText = temp.target.value;
    console.log(this.displayText);
  }
}
