import {Transition} from "ui-router-ng2";
import {HeroService} from "./home.details.services";

export function gameResolver(transition: Transition, heroService: HeroService) {
  console.log("Runing Game Resolver");
  console.log(transition.params());
  let parameters = transition.params();
  console.log(parameters.gameId);
  console.log(heroService.getHeroes());
  return {
    'gameId': 1,
    "description": "Oh hiya!"
  }
}
