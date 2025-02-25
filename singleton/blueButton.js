import Counter from './Counter.js';

function blueButton() {
  const blueBtn = document.querySelector('#blue');
  const countPara = document.querySelector('#count');

  function btnHandler() {
    Counter.increment();
    const count = Counter.getCount();
    countPara.textContent = `${count}`;
  }

  blueBtn.addEventListener('click', btnHandler);
}

export default blueButton;
