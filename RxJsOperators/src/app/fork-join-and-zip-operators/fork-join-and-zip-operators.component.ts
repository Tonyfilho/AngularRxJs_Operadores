import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { delay, forkJoin, fromEvent, map, Subscription, zip } from 'rxjs';
import { ForkZipService } from './fork-zip.service';

@Component({
  selector: 'app-fork-join-and-zip-operators',
  templateUrl: './fork-join-and-zip-operators.component.html',
})
export class ForkJoinAndZipOperatorsComponent implements OnInit, AfterViewInit {
  @ViewChild('churrascoButton') churrascoButton!:ElementRef | any;
  @ViewChild('chocolateButton') chocolateButton!:ElementRef | any;
  constructor(private forkJoinService: ForkZipService) {
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

  ngOnInit(): void {
    /**
     * Para Usamor @ViewChild temo que usar o lifeCicleHooks 
     */
    console.log('Aqui ficou undefined',this.chocolateButton);
  }
  
  ngAfterViewInit(): void {
    console.log('Aqui ficou Ja temos Algo ElementRef',this.chocolateButton);
    /**
     * usaremos o FromEvent para criar um observable do ElementRef, é um exemplo
     * de como Pegar os dados do botão, sem usar o evento CLICK.
     * ou seja Criando um evento proprio
     */
    const button01$ = fromEvent(this.churrascoButton.nativeElement,'click').pipe(map(((data: any) => data.target.innerHTML)));
    const button02$ = fromEvent(this.chocolateButton.nativeElement, 'click').pipe(map((d: any) => d.target.innerHTML));
    /** Agora é o OBSERVABLE conseguimos pegar os dados, usando o PIPE e o MAP teremos 
     * acesso aos dados
     */
    button01$.subscribe((data => console.log(data)));
    button02$.subscribe((data) => console.log(data));

    /**
     * o ZIP pega o a Subscrição e transforma em ARRAY, o ZIP vai retornar quando Todos os dados
     * o ARRAY estiverem prontos, neste exemplo quando clicarmos 1x em cada botão
     */
    zip([button01$, button02$]).subscribe(d => console.log(d));
  }
}
