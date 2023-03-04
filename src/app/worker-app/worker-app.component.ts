import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-worker-app',
  templateUrl: './worker-app.component.html',
  styleUrls: ['./worker-app.component.scss'],
})
export class WorkerAppComponent implements OnInit {
  countTomato = 0;
  countApple = 0;

  constructor(private appService: AppService) {}

  async ngOnInit() {}

  incTomato() {
    this.countTomato++;
  }

  async incApple() {
    await this.appService.countApple(
      this.countApple,
      (value: number) => (this.countApple = value)
    );
  }
}
