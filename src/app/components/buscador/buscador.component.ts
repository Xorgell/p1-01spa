import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['term'];
      this.heroes = this._heroesService.buscarHeroes(params['term']);
    
    })
  }
  VerHeroe(i: number){
    this.router.navigate(['/heroe', i]);
  }

}
