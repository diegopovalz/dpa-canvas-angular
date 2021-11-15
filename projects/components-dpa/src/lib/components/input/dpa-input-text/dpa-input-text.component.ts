import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dpa-input-text',
  templateUrl: './dpa-input-text.component.html',
  styleUrls: ['./dpa-input-text.component.scss']
})
export class DpaInputTextComponent implements OnInit {

  @Input() isInvalid: boolean = false;
  @Input() isOptional: boolean = false;
  @Input() labelText: string = '';
  @Input() placeholder: string = '';
  @Input() pattern: string = '(.*)';

  constructor() { }

  ngOnInit(): void {
  }

}
