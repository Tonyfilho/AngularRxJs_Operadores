import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareService } from './share.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
 
})
export class ShareReplayComponent implements OnInit, OnDestroy {
  somente1$!: Subscription;
  somente1Dnovo$!: Subscription;
  /**
   * o ShareReplay Operator serve para Evitar que haja 2 subscrição 
   * no servidor quando temos o MESMO item, com isto  podemos subscrever 2 vezes, 
   * mas só iremos usar recursos HTTP 1 VEZ, ou seja 1 Request somente,
   * para ver isto tem que ser visto no 
   * console.log/server usando o shareReplay e sem o shareReplay
   */
  constructor(private localService: ShareService) { }

  ngOnInit(): void {
  this.somente1$ =  this.localService.getUm().subscribe(data => console.log(data));
  this.somente1Dnovo$ =this.localService.getUm().subscribe(data => console.log(data));
  
    
  }
  ngOnDestroy(): void {
      this.somente1$.unsubscribe();
      this.somente1Dnovo$.unsubscribe();
  }


}
