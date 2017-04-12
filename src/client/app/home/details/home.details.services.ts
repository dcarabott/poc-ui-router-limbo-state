import {Injectable} from "@angular/core";

@Injectable()
export class HeroService {
  getHeroes(): String[] {
    return ["Hello", "World"]
  } // stub
}
