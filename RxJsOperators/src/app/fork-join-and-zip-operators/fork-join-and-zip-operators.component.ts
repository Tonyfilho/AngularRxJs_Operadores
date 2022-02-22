import { Component, OnInit } from '@angular/core';
import { delay, forkJoin, Subscription } from 'rxjs';
import { ForkZipService } from './fork-zip.service';

@Component({
  selector: 'app-fork-join-and-zip-operators',
  templateUrl: './fork-join-and-zip-operators.component.html',
})
export class ForkJoinAndZipOperatorsComponent implements OnInit {
  
  constructor(private forkJoinService: ForkZipService) {
    
  }

  ngOnInit(): void {
    /**
     * Como paramentro do ForkJoin, temos que passar a FUNÇÂO e não a subscrição. Lembrando que 
     * o RETORNO é sempre um ARRAY,
     * Colocaremos um DELAY para mostrar que o FORKJOIN, só retorna depois que TODOS os 
     * OBSERVABLES estiverem retornado.
     */
    forkJoin([
      this.forkJoinService.getUmBacon().pipe(delay(3000)),
      this.forkJoinService.getDoisBacon(),
    ]).subscribe(([data01, data02]) => {console.log(data01, data02) });
  }
}
