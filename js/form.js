'use strict';
(function () {


  // Деактивация формы при первом открытии
  const map = document.querySelector(`.map`);
  const adForm = document.querySelector(`.ad-form`);
  const adFormFieldsets = adForm.querySelectorAll(`fieldset`);
  const mapFilter = document.querySelector(`.map__filters`);
  const mapFilterFieldsets = mapFilter.querySelectorAll(`fieldset`);
  const mapFilterSelects = mapFilter.querySelectorAll(`select`);

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

  // Заполнение поля Адрес при неактивном состоянии страницы
  const mapPinMain = map.querySelector(`.map__pin--main`);
  const addressInput = adForm.querySelector(`#address`);

  addressInput.value =
    `${Math.round(parseInt(mapPinMain.style.left, 10) + mapPinMain.offsetWidth / 2)},
 ${Math.round(parseInt((mapPinMain.style.top), 10) + mapPinMain.offsetHeight / 2)}`;

  // Валидация поля "Количество гостей" и "Количество комнат"
  const roomNumberInput = adForm.querySelector(`#room_number`);
  const capacityInput = adForm.querySelector(`#capacity`);

  let validityCapacityInput = function () {
    let roomValue = roomNumberInput.value;
    let capacityValue = capacityInput.value;

    if (Number(roomValue) === 100 && Number(capacityValue) !== 0) {
      capacityInput.setCustomValidity(`Для выбранного значения Количество комнат: "100 комнат" подходит только вариант "Не для гостей"`);
    } else if (Number(capacityValue) === 0 && Number(roomValue) !== 100) {
      capacityInput.setCustomValidity(`Вариант "Не для гостей" подходит только для "100 комнат"`);
    } else if (Number(roomValue) < Number(capacityValue)) {
      capacityInput.setCustomValidity(`Количество гостей не соответствует количеству комнат. Для данного варианта количество гостей не должно превышать: ${Number(roomValue)} `);
    } else {
      capacityInput.setCustomValidity(``);
    }
    capacityInput.reportValidity();
  };

  capacityInput.addEventListener(`change`, function () {
    validityCapacityInput();
  });

  roomNumberInput.addEventListener(`change`, function () {
    validityCapacityInput();
  });

  // Валидация поля "Заголовок "
  const titleInput = adForm.querySelector(`#title`);
  const maxTitleLength = titleInput.getAttribute(`maxlength`);
  const minTitleLength = titleInput.getAttribute(`minlength`);

  titleInput.addEventListener(`input`, function () {
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

  const priceInput = adForm.querySelector(`#price`);
  const typeHouseInput = adForm.querySelector(`#type`);

  const minPricePerNight = {
    bungalow: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
  };

  let validityPriceInput = function () {
    let selectedTypeHouse = typeHouseInput.options[typeHouseInput.selectedIndex];

    if (priceInput.value < minPricePerNight[typeHouseInput.value]) {
      priceInput.setCustomValidity(`Минимальная цена за жилье класса "${selectedTypeHouse.textContent}": ${minPricePerNight[typeHouseInput.value]}`);
    } else {
      priceInput.setCustomValidity(``);
    }

    priceInput.reportValidity();
  };

  priceInput.addEventListener(`input`, function () {
    validityPriceInput();
  });

  typeHouseInput.addEventListener(`change`, function () {
    priceInput.setAttribute(`min`, minPricePerNight[typeHouseInput.value]);
    priceInput.setAttribute(`placeholder`, minPricePerNight[typeHouseInput.value]);

    validityPriceInput();
  });

  // Валидация полей "Время заезда" и "Время выезда"

  const timeinInput = adForm.querySelector(`#timein`);
  const timeoutInput = adForm.querySelector(`#timeout`);


  timeinInput.addEventListener(`change`, function () {
    timeoutInput.value = timeinInput.value;
  });

  timeoutInput.addEventListener(`change`, function () {
    timeinInput.value = timeoutInput.value;
  });

})();
