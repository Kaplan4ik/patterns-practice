import { BeforeunloadInterface } from '../interfaces/beforeunload-interface';

export class ServiceWorkerFacade {
  private beforeunload: BeforeunloadInterface;

  constructor(beforeUnload: BeforeunloadInterface) {
    this.beforeunload = beforeUnload;
  }

  public sendData() {
    this.beforeunload.sendDataOnBeforeUnload();
  }
}
