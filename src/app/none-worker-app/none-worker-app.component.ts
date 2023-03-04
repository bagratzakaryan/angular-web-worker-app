import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-none-worker-app',
  templateUrl: './none-worker-app.component.html',
  styleUrls: ['./none-worker-app.component.scss'],
})
export class NoneWorkerAppComponent implements OnInit {
  countTomato = 0;
  countApple = 0;

  constructor() {}

  ngOnInit(): void {}

  incTomato() {
    this.countTomato++;
  }

  incApple() {
    const start = Date.now();
    while (Date.now() < start + 5000) {}
    this.countApple++;
  }
}
