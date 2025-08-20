class Observable {
  constructor() {
    this.subscribers = [];
  }
  
  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  sendNotification() {
    this.subscribers.forEach(subscriber => subscriber());
  }

}

export { Observable };
