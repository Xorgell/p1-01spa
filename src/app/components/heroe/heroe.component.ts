import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.services';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }

}
interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
 }