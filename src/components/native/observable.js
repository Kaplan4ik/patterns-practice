export class Observable {
  constructor() {
    this.eventTarget = new EventTarget();
  }

  subscribe(callback) {
    this.eventTarget.addEventListener('data', callback);
  }

  emit(data) {
    const event = new CustomEvent('data', { detail: data });
    this.eventTarget.dispatchEvent(event);
  }

  async getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    this.emit(data);
  }
}
