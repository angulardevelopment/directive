import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None // If you want styles that are added to Parent applied to Child you need to set ViewEncapsulation.None in the Parent component so it doesn't prevent styles to bleed in. None is the only one that allows styles to cross component boundaries.
})
export class AppComponent {
  title = 'directive-usage';
}
