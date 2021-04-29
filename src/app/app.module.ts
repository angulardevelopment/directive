import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollComponent } from './scroll/scroll.component';
import { CustomScrollDirective } from './custom-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollComponent, CustomScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
