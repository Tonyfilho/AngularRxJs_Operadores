import { Component, OnInit } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
})
export class IntervalTimerComponent implements OnInit {
  /**
   * Interval é um Observable que EMITE um infinito tempo, que pode ser controlado, e podemos pegar cada emissão  deste observable,
   * como paramentro colocamos o tempo em milissegundo, gerando um intervalo 
   */
  dataInterval: number = 0;
  dataTimer: number = 0;
  umSegundo$!: Observable<number>;
  aposCincoSegundos$!: Observable<number>;
  // tempo: number = []
  constructor() {
    this.umSegundo$ = interval(1000);// recebe o numeros de milisegundos
    this.aposCincoSegundos$ = timer(5000, 1000);//2 argumentos 1º o DELAY e o 2º o intervalo de tempo em Milisegundos
  }

  ngOnInit(): void {
    /**
     * Escrevendo se no Observable interval()
     */
    this.umSegundo$.subscribe((localTime) => {
      return (this.dataInterval = localTime);
    });
    /**
     * Escrevendo se no Observable TIMER()
     */
    this.aposCincoSegundos$.subscribe(data => this.dataTimer = data)
  }
}
