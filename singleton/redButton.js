import Counter from './Counter.js';

function redButton() {
  const redBtn = document.querySelector('#red');
  const countPara = document.querySelector('#count');

  function btnHandler() {
    Counter.increment();
    const count = Counter.getCount();
    countPara.textContent = `${count}`;
  }

  redBtn.addEventListener('click', btnHandler);
}

export default redButton;
