'use strict';

const mapPinTemplate = document.querySelector(`#pin`).content.querySelector(`.map__pin`);
const OFFSET_X_PIN = 50;
const OFFSET_Y_PIN = 70;

window.pin = {

  renderPin(array) {

    if (array.offer) {
      let newPin = mapPinTemplate.cloneNode(true);

      newPin.style.left = array.location.x - OFFSET_X_PIN / 2 + `px`;
      newPin.style.top = array.location.y - OFFSET_Y_PIN + `px`;

      let avatar = newPin.querySelector(`img`);
      avatar.src = array.author.avatar;
      avatar.alt = array.offer.title;

      newPin.addObj = array;

      return newPin;
    }
    return undefined;

  }
};
