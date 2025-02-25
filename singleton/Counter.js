let instance;
let counter = 0;

class Counter {
  constructor() {
    // this enforces the creation of only one instance
    if (instance) {
      throw new Error('You can only create one instance!');
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

// const counter1 = new Counter();
// const counter2 = new Counter();
// console.log(counter1.getInstance() === counter2.getInstance());

/* 
Object.freeze ensures that the consuming code cannot modify the Singleton. Properties on the frozen instance cannot be added or modified, which reduces the risk of accidentally overwriting the values on the Singleton.
*/

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
