import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
 @ViewChild('scroll', { read: ElementRef }) public scroll: ElementRef<any>;
  constructor() { }

  ngOnInit() {
  }
 public onPreviousSearchPosition() {
  this.scroll.nativeElement.scrollTop -= 20;
 }

 public onNextSearchPosition(){
  this.scroll.nativeElement.scrollTop += 20;
   console.log('down');
 }
}