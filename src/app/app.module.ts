import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollComponent } from './scroll/scroll.component';
import { CustomScrollDirective } from './custom-scroll.directive';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { ttClassDirective } from './tt-class.directive';
import { ttIfDirective } from './tt-if.directive';
import { FormsModule } from '@angular/forms';
import { ttToggleDirective } from './toggle-directive';
import { ttTooltipDirective } from './tooltip-directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollComponent, CustomScrollDirective,
    DemoComponent, Demo1Component,
    ttClassDirective,
    ttIfDirective,
    ttToggleDirective,
    ttTooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
