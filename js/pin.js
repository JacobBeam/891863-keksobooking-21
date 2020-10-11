'use strict';
(function () {

  const mapPinTemplate = document.querySelector(`#pin`).content.querySelector(`.map__pin`);
  const offsetXPin = 50;
  const offsetYPin = 70;

  window.pin = {

    renderPin(array) {

      if (array.offer) {
        let newPin = mapPinTemplate.cloneNode(true);


        newPin.style.left = array.location.x - offsetXPin / 2 + `px`;
        newPin.style.top = array.location.y - offsetYPin + `px`;

        let avatar = newPin.querySelector(`img`);
        avatar.src = array.author.avatar;
        avatar.alt = array.offer.title;

        newPin.addObj = array;

        return newPin;
      } else {
        return undefined;
      }


    }
  };

})();
