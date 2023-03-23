export class Observable {
  constructor(initialState) {
    this.state = initialState;
    this.observers = [];
  }

  subscribe(transform, callback) {
    const subscription = {
      transform,
      promise: null,
      resolve: null,
      callback,
    };

    subscription.promise = new Promise((resolve) => {
      subscription.resolve = resolve;
    });

    this.observers.push(subscription);

    return subscription.promise;
  }

  unsubscribe(subscription) {
    const index = this.observers.findIndex((obs) => obs === subscription);

    if (~index) {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    this.observers.forEach((subscription) => {
      const { transform, resolve, callback } = subscription;
      const value = transform(this.state);

      setTimeout(() => {
        resolve(value);
      }, 0);

      subscription.promise.then((result) => {
        callback(result);
      });
    });
  }

  set(newState) {
    this.state = newState;
    this.notify();
  }
}
