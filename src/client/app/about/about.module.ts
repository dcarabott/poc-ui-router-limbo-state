import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { UIRouterModule, Ng2StateDeclaration } from 'ui-router-ng2';

export let CHILD_STATES: Ng2StateDeclaration[] = [{name: 'about', url: '/about', component: AboutComponent}];

@NgModule({
  imports: [CommonModule, UIRouterModule.forChild({states:CHILD_STATES})],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule {
}
