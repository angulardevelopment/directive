import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ScrollComponent } from './scroll/scroll.component';
import { Demo1Component } from './demo1/demo1.component';

const routes: Routes = [{
  path: 'none-demo',
  component: DemoComponent
},
{
  path: 'scroll',
  component: ScrollComponent
},
{
  path: 'emulated-demo',
  component: Demo1Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
