'use strict';
(function () {

  const filtersContainer = document.querySelector(`.map__filters-container`);
  const map = document.querySelector(`.map`);
  const pinsList = map.querySelector(`.map__pins`);

  let getPinsBlock = function (array) {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < array.length; i++) {
      if (window.pin.renderPin(array[i])) {
        fragment.append(window.pin.renderPin(array[i]));
      }
    }
    return fragment;
  };

  let appendNewCard = function (evt) {
    let buttonPin = evt.target.closest(`.map__pin`);
    let buttonPinMain = evt.target.closest(`.map__pin--main`);
    if (buttonPin && !buttonPinMain) {

      // Проверка, есть ли открытая карточка
      let mapCard = map.querySelector(`.map__card`);
      if (mapCard) {
        mapCard.remove();
      }

      // Отрисовка новой карточки
      let renderNewCard = window.card.renderCard(buttonPin.addObj);
      filtersContainer.before(renderNewCard);

      let buttonCloseCard = renderNewCard.querySelector(`.popup__close`);

      buttonCloseCard.addEventListener(`click`, function () {
        renderNewCard.remove();
      });

      document.addEventListener(`keydown`, function (eventKey) {
        evt.preventDefault();
        if (eventKey.key === `Escape`) {
          renderNewCard.remove();
        }
      });
    }
  };


  window.map = {
    renderPins() {
      pinsList.append(getPinsBlock(window.data.arrayData));
    },
    renderCardOnClick() {
      pinsList.addEventListener(`click`, function (evt) {
        appendNewCard(evt);
      });
    },
    renderCardOnEnter() {
      map.addEventListener(`keydown`, function (evt) {
        if (evt.key === `Enter`) {
          appendNewCard(evt);
        }
      });
    }
  };

})();
