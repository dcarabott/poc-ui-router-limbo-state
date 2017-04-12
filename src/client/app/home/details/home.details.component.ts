import {Component, Input, OnInit} from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  templateUrl: 'home.details.component.html',
  styleUrls: ['home.details.component.css']
})
export class HomeDetailsComponent extends OnInit {

  @Input() game: any;
  gameId:number = 1;

  ngOnInit() {
    this.gameId = this.game.gameId;
  }

}
