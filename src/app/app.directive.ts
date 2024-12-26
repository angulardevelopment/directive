import { Directive, Injectable, OnInit } from '@angular/core';

@Injectable()
export class MyService {
  getData() {
    return 'Data from MyService';
  }
}
// `MyService` is provided at the directive level, making it available only within the context of `MyDirective`.
@Directive({
  selector: '[appMyDirective]',
  providers: [MyService]
})
export class MyDirective implements OnInit {
  constructor(private myService: MyService) {}

  ngOnInit() {
    console.log(this.myService.getData()); // "Data from MyService"
  }
}