import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervalTimerComponent,
    ShareReplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
