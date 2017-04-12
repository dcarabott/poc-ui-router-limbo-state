import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AboutModule } from './about/about.module';
import { Ng2StateDeclaration, UIRouterModule, UIView } from 'ui-router-ng2';

export let MAIN_STATES: Ng2StateDeclaration[] = [{
    name: 'app',
    url: '',
    component: AppComponent,
    abstract: true,
    resolve: [
        {
            token: 'test',
            resolveFn: testResolver
        }
    ]
}];

export function testResolver() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('RESOLVED');
        }, 2000);
    });
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        UIRouterModule.forRoot({
            states: MAIN_STATES
        }),
        AboutModule
    ],
    declarations: [AppComponent],
    bootstrap: [UIView]

})
export class AppModule {
}
