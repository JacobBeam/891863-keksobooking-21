'use strict';
(function () {
  const map = document.querySelector(`.map`);
  const mapPinMain = map.querySelector(`.map__pin--main`);

  const MAP_PIN_MAIN_OFFSET_Y = 80;
  const HALF_WIDTH_MAP_PIN_MAIN = mapPinMain.offsetWidth / 2;
  const HALF_HEIGHT_MAP_PIN_MAIN = mapPinMain.offsetHeight / 2;

  const adForm = document.querySelector(`.ad-form`);
  const addressInput = adForm.querySelector(`#address`);

  const roomNumberInput = adForm.querySelector(`#room_number`);
  const capacityInput = adForm.querySelector(`#capacity`);
  const AMOUNT_ROOM_NOT_FOR_GUEST = 100;
  const VALUE_NOT_FOR_GUEST = 0;

  const titleInput = adForm.querySelector(`#title`);
  const maxTitleLength = titleInput.getAttribute(`maxlength`);
  const minTitleLength = titleInput.getAttribute(`minlength`);

  const priceInput = adForm.querySelector(`#price`);
  const typeHouseInput = adForm.querySelector(`#type`);
  const minPricePerNightMap = {
    bungalow: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
  };

  window.form = {

    getStartMainPinCoords() {
      addressInput.value =
        `${Math.round(parseInt(mapPinMain.style.left, 10) + HALF_WIDTH_MAP_PIN_MAIN)},
${Math.round(parseInt((mapPinMain.style.top), 10) + HALF_HEIGHT_MAP_PIN_MAIN)}`;
    },
    getMainPinCoords() {
      addressInput.value =
        `${Math.round(parseInt(mapPinMain.style.left, 10) + HALF_WIDTH_MAP_PIN_MAIN)},
${Math.round(parseInt((mapPinMain.style.top), 10) + MAP_PIN_MAIN_OFFSET_Y)}`;
    }
  };

  const timeinInput = adForm.querySelector(`#timein`);
  const timeoutInput = adForm.querySelector(`#timeout`);

  const successMessageTemplate = document.querySelector(`#success`).content.querySelector(`.success`);
  const errorMessageTemplate = document.querySelector(`#error`).content.querySelector(`.error`);
  const mainTag = document.querySelector(`main`);

  // Валидация поля "Количество гостей" и "Количество комнат"

  let validationCapacityInput = () => {
    let roomValue = roomNumberInput.value;
    let capacityValue = capacityInput.value;

    if (Number(roomValue) === AMOUNT_ROOM_NOT_FOR_GUEST && Number(capacityValue) !== VALUE_NOT_FOR_GUEST) {
      capacityInput.setCustomValidity(`Для выбранного значения Количество комнат: "100 комнат" подходит только вариант "Не для гостей"`);
    } else if (Number(capacityValue) === VALUE_NOT_FOR_GUEST && Number(roomValue) !== AMOUNT_ROOM_NOT_FOR_GUEST) {
      capacityInput.setCustomValidity(`Вариант "Не для гостей" подходит только для "100 комнат"`);
    } else if (Number(roomValue) < Number(capacityValue)) {
      capacityInput.setCustomValidity(`Количество гостей не соответствует количеству комнат. Для данного варианта количество гостей не должно превышать: ${Number(roomValue)} `);
    } else {
      capacityInput.setCustomValidity(``);
    }
    capacityInput.reportValidity();
  };

  capacityInput.addEventListener(`change`, () => {
    validationCapacityInput();
  });

  roomNumberInput.addEventListener(`change`, () => {
    validationCapacityInput();
  });

  // Валидация поля "Заголовок "

  titleInput.addEventListener(`input`, () => {
    let valueLength = titleInput.value.length;

    if (valueLength < minTitleLength) {
      titleInput.setCustomValidity(`Ещё ${minTitleLength - valueLength} симв.`);
    } else if (valueLength > maxTitleLength) {
      titleInput.setCustomValidity(`Удалите ${(valueLength - maxTitleLength)} симв.`);
    } else {
      titleInput.setCustomValidity(``);
    }

    titleInput.reportValidity();
  });


  // Валидация полей "Цена за ночь" и "Тип жилья"

  let validationPriceInput = () => {
    let selectedTypeHouse = typeHouseInput.options[typeHouseInput.selectedIndex];

    if (priceInput.value < minPricePerNightMap[typeHouseInput.value]) {
      priceInput.setCustomValidity(`Минимальная цена за жилье класса "${selectedTypeHouse.textContent}": ${minPricePerNightMap[typeHouseInput.value]}`);
    } else {
      priceInput.setCustomValidity(``);
    }

    priceInput.reportValidity();
  };

  priceInput.addEventListener(`input`, () => {
    validationPriceInput();
  });

  typeHouseInput.addEventListener(`change`, () => {
    priceInput.setAttribute(`min`, minPricePerNightMap[typeHouseInput.value]);
    priceInput.setAttribute(`placeholder`, minPricePerNightMap[typeHouseInput.value]);

    validationPriceInput();
  });

  // Валидация полей "Время заезда" и "Время выезда"

  timeinInput.addEventListener(`change`, () => {
    timeoutInput.value = timeinInput.value;
  });

  timeoutInput.addEventListener(`change`, () => {
    timeinInput.value = timeoutInput.value;
  });

  let successMessage = successMessageTemplate.cloneNode(true);
  let errorMessage = errorMessageTemplate.cloneNode(true);


  let onMessageEscPress = (evt) => {
    window.utils.isEscEvent(evt, closeMessage);
  };

  let onMessageClick = (evt) => {
    evt.preventDefault();
    closeMessage();
  };

  let closeMessage = () => {
    successMessage.remove();
    errorMessage.remove();

    document.removeEventListener(`keydown`, onMessageEscPress);
    document.removeEventListener(`click`, onMessageClick);
  };

  let openMessage = (message) => {
    mainTag.append(message);
    document.addEventListener(`keydown`, onMessageEscPress);
    message.addEventListener(`click`, onMessageClick);
  };


  let successUploadRequestHandler = () => {
    openMessage(successMessage);
    adForm.reset();
    window.main.deactivationPage();
  };


  let errorUploadRequestHandler = () => {
    openMessage(errorMessage);
  };


  adForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    window.backend.upload(new FormData(adForm), successUploadRequestHandler, errorUploadRequestHandler);
  });

})();
