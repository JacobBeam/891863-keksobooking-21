'use strict';
(function () {

  const map = document.querySelector(`.map`);
  const mapPinMain = map.querySelector(`.map__pin--main`);
  const coordsMap = map.getBoundingClientRect();
  const halfWidthMapPinMain = mapPinMain.offsetWidth / 2;
  let minWidthLocationPin = 0 - halfWidthMapPinMain;
  let maxWidthLocationPin = map.clientWidth - halfWidthMapPinMain;
  let minHeightLocationPin = 130 + mapPinMain.offsetHeight;
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

      if (moveEvt.clientY < minHeightLocationPin - pageYOffset) {
        mapPinMain.style.top = minHeightLocationPin - pageYOffset;
      } else if (moveEvt.clientY > maxHeightLocationPin - pageYOffset) {
        mapPinMain.style.top = maxHeightLocationPin - pageYOffset;
      } else {
        mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + `px`;
      }


      if (moveEvt.clientX < coordsMap.left + halfWidthMapPinMain) {
        mapPinMain.style.left = minWidthLocationPin;

      } else if (moveEvt.clientX > coordsMap.right) {
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
