'use strict';

const DEBOUNCE_INTERVAL = 500;
let lastTimeout;

window.utils = {
  getRandomNumber(min, max) {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  },
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
  isEscEvent(evt, action) {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      action();
    }
  },
  debounce(cb) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
  }
};
