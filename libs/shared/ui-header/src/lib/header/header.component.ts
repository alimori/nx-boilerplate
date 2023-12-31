import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sample-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input('title') title!: string;
  constructor() { }

  ngOnInit(): void { }

}
