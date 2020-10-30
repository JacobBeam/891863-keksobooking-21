'use strict';

const DEBOUNCE_INTERVAL = 500;
let lastTimeout;

window.utils = {
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
