import observable from './observable.js';

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const eventContainerEl = document.querySelector('#eventContainer');

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function eventData(data) {
  const paragraph = document.createElement('p');
  paragraph.textContent = `${data}`;
  eventContainerEl.appendChild(paragraph);
}

observable.subscribe(logger);
observable.subscribe(eventData);
observable.getObservers();

// whenever a user interacts with either of the button elements, both the logger and the eventData will get notified - console.log data and append new paragraph to DOM
function btn1Handler() {
  observable.notify('user clicked button 1');
}

function btn2Handler() {
  observable.notify('user clicked button 2');
}

btn1.addEventListener('click', btn1Handler);
btn2.addEventListener('click', btn2Handler);
