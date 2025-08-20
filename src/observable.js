class Observable {
  constructor() {
    this.status = "todo"; // todo, in-progress, done
    this.subscribers = [];
  }
  
  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }
  
  /**
   * 
   * @param {string} status 
   */
  updateStatus(status) {
    const oldStatus = this.status;
    this.status = status;
    this.sendNotification(oldStatus, this);
  }

  sendNotification(oldStatus, todoTask) {
    this.subscribers.forEach(subscriber => subscriber(oldStatus, todoTask));
  }
  

}

export { Observable };
