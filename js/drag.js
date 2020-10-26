'use strict';

const map = document.querySelector(`.map`);
const mapPinMain = map.querySelector(`.map__pin--main`);
const coordsMap = map.getBoundingClientRect();
const HALF_WIDTH_MAP_PIN_MAIN = mapPinMain.offsetWidth / 2;
const MIN_WIDTH_LOCATION_PIN = 0 - HALF_WIDTH_MAP_PIN_MAIN;
const MAX_WIDTH_LOCATION_PIN = map.clientWidth - HALF_WIDTH_MAP_PIN_MAIN;
const MIN_HEIGHT_LOCATION_PIN = 130 + mapPinMain.offsetHeight;
const MAX_HEIGHT_LOCATION_PIN = 630;


mapPinMain.addEventListener(`mousedown`, (evt) => {
  evt.preventDefault();

  let startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  let onMouseMove = (moveEvt) => {
    moveEvt.preventDefault();

    let shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    if (moveEvt.clientY < MIN_HEIGHT_LOCATION_PIN - pageYOffset) {
      mapPinMain.style.top = MIN_HEIGHT_LOCATION_PIN - pageYOffset;
    } else if (moveEvt.clientY > MAX_HEIGHT_LOCATION_PIN - pageYOffset) {
      mapPinMain.style.top = MAX_HEIGHT_LOCATION_PIN - pageYOffset;
    } else {
      mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + `px`;
    }


    if (moveEvt.clientX < coordsMap.left + HALF_WIDTH_MAP_PIN_MAIN) {
      mapPinMain.style.left = MIN_WIDTH_LOCATION_PIN;

    } else if (moveEvt.clientX > coordsMap.right) {
      mapPinMain.style.left = MAX_WIDTH_LOCATION_PIN + `px`;
    } else {
      mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + `px`;
    }

    window.form.getMainPinCoords();

  };

  let onMouseUp = (upEvt) => {
    upEvt.preventDefault();

    document.removeEventListener(`mousemove`, onMouseMove);
    document.removeEventListener(`mouseup`, onMouseUp);

    window.form.getMainPinCoords();
  };
  document.addEventListener(`mousemove`, onMouseMove);
  document.addEventListener(`mouseup`, onMouseUp);
});
