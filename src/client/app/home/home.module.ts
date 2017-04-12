import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { UIRouterModule, Ng2StateDeclaration, Transition} from "ui-router-ng2";
import { HomeDetailsComponent } from "./details/home.details.component";
import {gameResolver} from "./details/home.details.resolves";
import {HeroService} from "./details/home.details.services";


export let CHILD_STATES: Ng2StateDeclaration[] = [
  {name: 'home', url: '/games', component: HomeComponent},
  {name: 'home.details', url: '/games/:gameId', component: HomeDetailsComponent,
    resolve: [
      {
        token: 'game',
        deps: [Transition, HeroService],
        resolveFn: gameResolver
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule,
    UIRouterModule.forChild({
      states: CHILD_STATES
    })
    , SharedModule],
  declarations: [HomeComponent, HomeDetailsComponent],
  exports: [HomeComponent, HomeDetailsComponent],
  providers: [NameListService, HeroService]
})
export class HomeModule { }
