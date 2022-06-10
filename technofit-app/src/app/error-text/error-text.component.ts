import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'tf-error-text',
  templateUrl: './error-text.component.html',
  styleUrls: ['./error-text.component.scss']
})
export class ErrorTextComponent implements OnChanges {

  @Input()
  control!: AbstractControl;

  showText = false;
  constructor() { }

  ngOnChanges() {

  }


}
