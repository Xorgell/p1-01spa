import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.services';
import { Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe [] = [];
  constructor(private _heroeService: HeroesService, private router:Router, )
   { }

  ngOnInit(): void {
    this.heroes = this._heroeService.getHeroes();
    console.log(this.heroes);
  }

  VerHeroe(i: number){
    this.router.navigate(['/heroe', i]);
  }


}

interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;

}
