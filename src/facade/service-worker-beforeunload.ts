import { BeforeunloadInterface } from '../interfaces/beforeunload-interface';

export class ServiceWorkerBeforeunload implements BeforeunloadInterface {
  private readonly url: string;
  private readonly data: { [key: string]: string };
  constructor(url: string, data: { [key: string]: string }) {
    this.url = url;
    this.data = data;
  }

  public sendDataOnBeforeUnload() {
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(this.data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    });
  }
}
