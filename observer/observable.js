class Observable {
  // an array of observers that will get notified whenever a specific event occurs
  constructor() {
    this.observers = [];
  }

  // a method to add observers to the observers list
  subscribe(func) {
    this.observers.push(func);
  }

  // a method to remove observers from the observers list
  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer != func);
  }

  // returns the currently subscribed observers
  getObservers() {
    console.log(this.observers);
  }

  // notifies ALL observers whenever a specific event occurs
  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

export default new Observable();
