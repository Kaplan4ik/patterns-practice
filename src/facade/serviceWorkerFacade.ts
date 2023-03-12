export class ServerWorkerFacade {
  constructor() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.ts')
          .then((registration) => {
            console.log('Service Worker success', registration.scope);
          })
          .catch((err) => {
            console.log('Server worker filed', err);
          });
      });
    }
  }

  public sendDataOnBeforeUnload(url: string, data: any) {
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    });
  }
}
