'use strict';
(function () {

  const mapPinTemplate = document.querySelector(`#pin`).content.querySelector(`.map__pin`);
  const offsetXPin = 50 / 2;
  const offsetYPin = 70;

  window.pin = {

    renderPin(array) {
      let newPin = mapPinTemplate.cloneNode(true);

      newPin.style.left = array.location.x + offsetXPin + `px`;
      newPin.style.top = array.location.y + offsetYPin + `px`;

      let avatar = newPin.querySelector(`img`);
      avatar.src = array.author.avatar;
      avatar.alt = array.offer.title;

      newPin.addObj = array;

      return newPin;
    }
  };

})();