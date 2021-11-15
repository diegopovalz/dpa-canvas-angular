import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dpa-button',
  templateUrl: './dpa-button.component.html',
  styleUrls: ['./dpa-button.component.scss']
})
export class DpaButtonComponent implements OnInit {

  @Input() buttonText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
