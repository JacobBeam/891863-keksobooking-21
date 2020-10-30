'use strict';

const DEBOUNCE_INTERVAL = 500;
let lastTimeout;


let isEscEvent = (evt, action) => {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    action();
  }
};

let debounce = (cb) => {
  if (lastTimeout) {
    window.clearTimeout(lastTimeout);
  }
  lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
};

window.utils = {
  isEscEvent,
  debounce
};
