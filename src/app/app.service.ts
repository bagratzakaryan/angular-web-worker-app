import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  async countApple(counter: number, updateCounter: (value: number) => void) {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./workers/app.worker', import.meta.url)
      );

      worker.onmessage = ({ data }) => {
        updateCounter(data);
      };

      worker.postMessage(counter);
    }
  }
}
