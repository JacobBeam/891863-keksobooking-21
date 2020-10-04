'use strict';
(function () {

  window.map = {
    getPinsBlock(array) {
      let fragment = document.createDocumentFragment();
      for (let i = 0; i < array.length; i++) {
        fragment.append(window.pin.renderPin(array[i]));
      }
      return fragment;
    }
  };

})();
