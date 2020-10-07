'use strict';
(function () {

  const map = document.querySelector(`.map`);
  const mapPinMain = map.querySelector(`.map__pin--main`);

  let minWidthLocationPin = 0 - mapPinMain.offsetWidth / 2;
  let maxWidthLocationPin = map.clientWidth - mapPinMain.offsetWidth / 2;
  let minHeightLocationPin = 130;
  let maxHeightLocationPin = 630;


  mapPinMain.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      if (mapPinMain.offsetTop - shift.y < minHeightLocationPin) {
        mapPinMain.style.top = minHeightLocationPin;
      } else if (mapPinMain.offsetTop - shift.y > maxHeightLocationPin) {
        mapPinMain.style.top = maxHeightLocationPin;
      } else {
        mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + `px`;
      }


      if (mapPinMain.offsetLeft - shift.x < minWidthLocationPin) {
        mapPinMain.style.left = minWidthLocationPin;
      } else if (mapPinMain.offsetLeft - shift.x > maxWidthLocationPin) {
        mapPinMain.style.left = maxWidthLocationPin + `px`;
      } else {
        mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + `px`;
      }

      window.form.getMainPinCoords();
    };

    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      window.form.getMainPinCoords();
    };
    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
})();
