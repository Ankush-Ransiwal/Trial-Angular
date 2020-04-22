import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() placeholder: string = "";
  @Output() updateInputText = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
   }
  
  onUpdateInput() {
    this.updateInputText.emit();
    
  }

}
