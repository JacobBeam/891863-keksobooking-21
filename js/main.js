'use strict';
(function () {
  // Заполнение поля Адрес при неактивном состоянии страницы
  const map = document.querySelector(`.map`);
  const mapPinMain = map.querySelector(`.map__pin--main`);
  const adForm = document.querySelector(`.ad-form`);
  const mapFilter = document.querySelector(`.map__filters`);
  const adFormFieldsets = adForm.querySelectorAll(`fieldset`);
  const mapFilterFieldsets = mapFilter.querySelectorAll(`fieldset`);
  const mapFilterSelects = mapFilter.querySelectorAll(`select`);

  // Заполнение поля Адрес при неактивном состоянии страницы
  window.form.getStartMainPinCoords();

  // Функция деактивации страницы
  let deactivationPage = function () {
    map.classList.add(`map--faded`);
    adForm.classList.add(`ad-form--disabled`);

    for (let fieldset of adFormFieldsets) {
      fieldset.setAttribute(`disabled`, `disabled`);
    }

    for (let fieldset of mapFilterFieldsets) {
      fieldset.setAttribute(`disabled`, `disabled`);
    }

    for (let select of mapFilterSelects) {
      select.setAttribute(`disabled`, `disabled`);
    }
  };

  deactivationPage();

  // Функция активации страницы
  let activationPage = function () {
    map.classList.remove(`map--faded`);
    adForm.classList.remove(`ad-form--disabled`);

    for (let fieldset of adFormFieldsets) {
      fieldset.removeAttribute(`disabled`);
    }
    for (let fieldset of mapFilterFieldsets) {
      fieldset.removeAttribute(`disabled`);
    }

    for (let select of mapFilterSelects) {
      select.removeAttribute(`disabled`);
    }
  };

  // Активация страницы по ЛКМ
  mapPinMain.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();
    if (evt.button === 0) {
      // Активация
      activationPage();

      //  Добавление меток
      window.map.renderPins();

      //  Новые координаты для поля Адрес
      window.form.getMainPinCoords();
    }
  }, {
    once: true
  });


  // Активация страницы по Enter
  mapPinMain.addEventListener(`keydown`, function (evt) {
    evt.preventDefault();

    if (evt.key === `Enter`) {
      //  Активация
      activationPage();

      //  Рендер меток
      window.map.renderPins();

      //  Новые координаты для поля Адрес
      window.form.getMainPinCoords();
    }
  }, {
    once: true
  });

  // Рендер карточки

  window.map.renderCardOnClick();
  window.map.renderCardOnEnter();

})();
