import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class Demo1Component implements OnInit {
title: string = "Custom Directives in Angular";
  show=true;
  constructor() { }

  ngOnInit() {
  }

}