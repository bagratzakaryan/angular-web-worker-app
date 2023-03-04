import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkerAppComponent } from './worker-app/worker-app.component';
import { NoneWorkerAppComponent } from './none-worker-app/none-worker-app.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerAppComponent,
    NoneWorkerAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
