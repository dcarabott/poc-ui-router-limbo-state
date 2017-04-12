import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { UIRouterModule, Ng2StateDeclaration } from 'ui-router-ng2';

export let MAIN_STATES: Ng2StateDeclaration[] = [{
  name: 'app',
  url: '',
  abstract: true
}];

@NgModule({
  imports: [BrowserModule, HttpModule,
    UIRouterModule.forRoot({
      states: MAIN_STATES
    }),
    AboutModule,
    HomeModule,
    SharedModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
