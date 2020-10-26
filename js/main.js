'use strict';
(function () {
  // Заполнение поля Адрес при неактивном состоянии страницы
  const FILTER_RESET_VALUE = `any`;
  const MAP_PIN_MAIN_START_STYLE = `left: 570px; top: 375px;`;
  const map = document.querySelector(`.map`);
  const mapPinMain = map.querySelector(`.map__pin--main`);
  const adForm = document.querySelector(`.ad-form`);
  const mapFilters = document.querySelector(`.map__filters`);
  const adFormFieldsets = adForm.querySelectorAll(`fieldset`);
  const mapFilterSelects = mapFilters.querySelectorAll(`select`);
  const checkboxes = mapFilters.querySelectorAll(`input[type="checkbox"]`);


  // Функция деактивации страницы
  let deactivationPage = () => {
    map.classList.add(`map--faded`);
    adForm.classList.add(`ad-form--disabled`);

    for (let fieldset of adFormFieldsets) {
      fieldset.setAttribute(`disabled`, `disabled`);
    }

    for (let checkbox of checkboxes) {
      checkbox.checked = false;
      checkbox.setAttribute(`disabled`, `disabled`);
    }

    for (let select of mapFilterSelects) {
      select.value = FILTER_RESET_VALUE;
      select.setAttribute(`disabled`, `disabled`);
    }

    mapPinMain.style.cssText = MAP_PIN_MAIN_START_STYLE;

    // Активация страницы по ЛКМ
    mapPinMain.addEventListener(`mousedown`, (evt) => {
      evt.preventDefault();
      if (evt.button === 0) {
        // Активация
        activationPage();

        //  Новые координаты для поля Адрес
        window.form.getMainPinCoords();
      }
    }, {
      once: true
    });


    // Активация страницы по Enter
    mapPinMain.addEventListener(`keydown`, (evt) => {


      if (evt.key === `Enter`) {
        evt.preventDefault();
        //  Активация
        activationPage();

        //  Новые координаты для поля Адрес
        window.form.getMainPinCoords();
      }
    }, {
      once: true
    });


    // Заполнение поля Адрес при неактивном состоянии страницы
    window.form.getStartMainPinCoords();

    // Удаление меток и карточки

    window.map.removePins();
    window.map.removeCard();
  };

  deactivationPage();

  // Функция активации страницы
  let activationPage = () => {
    window.backend.load(window.data.onSuccessLoadRequest, window.data.onErrorLoadRequest);

    map.classList.remove(`map--faded`);
    adForm.classList.remove(`ad-form--disabled`);

    for (let fieldset of adFormFieldsets) {
      fieldset.removeAttribute(`disabled`);
    }
  };

  // Рендер карточки

  window.map.renderCardOnClick();
  window.map.renderCardOnEnter();


  window.main = {
    deactivationPage() {
      deactivationPage();
    }
  };
})();
