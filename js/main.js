'use strict';
const map = document.querySelector(`.map`);

//data.js

//const amountAd = 8;
//const minPriceMock = 0;
//const maxPriceMock = 25000;
//const houseType = [`palace`, `flat`, `house`, `bungalow`];
//const houseTypeRus = {
//  flat: `Квартира`,
//  bungalow: `Бунгало`,
//  house: `Дом`,
//  palace: `Дворец`
//};
//const amountRooms = [1, 2, 3, 100];
//const amountGuests = [0, 1, 2, 3];
//const checkinTime = [`12:00`, `13:00`, `14:00`];
//const checkoutTime = [`12:00`, `13:00`, `14:00`];
//const possibleFeatures = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
//const titlesMock = [
//  `Lorem, ipsum dolor.`,
//  `Lorem, ipsum.`,
//  `Lorem ipsum dolor sit, amet consectetur adipisicing.`,
//  `Lorem.`,
//  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non nam autem repudiandae.`,
//  `Lorem ipsum dolor sit amet consectetur.`,
//  `Lorem, ipsum.`,
//  `Lorem ipsum dolor sit.`
//];
//const descriptionMock = [
//  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dignissimos.`,
//  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto.`,
//  `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
//  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, cumque placeat.`,
//  `Lorem ipsum dolor sit amet consectetur.`,
//  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit illum blanditiis quaerat.`,
//  `Lorem, ipsum dolor.`,
//  `Lorem ipsum dolor sit amet.`
//];
//const possiblePhotos = [
//  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
//  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
//  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
//];


// Возвращается 0 при попытке найти ширину newPin через offsetWidth, getComputedStyle, getBoundingClientRect(). Возможно, из-за того, что нет на странице. Задать вопрос

//const offsetXPin = 50 / 2;
//const offsetYPin = 70;
//const minWidthLocationPin = 0;
//const maxWidthLocationPin = map.clientWidth - offsetXPin * 2;
//const minHeightLocationPin = 130;
//const maxHeightLocationPin = 630 - offsetYPin;



















//utils.js
//let getRandomNumber = function (min, max) {
//  let random = min + Math.random() * (max + 1 - min);
//  return Math.floor(random);
//};


//let shuffleArray = function (array) {
//  for (let i = array.length - 1; i > 0; i--) {
//    let j = Math.floor(Math.random() * (i + 1));
//    [array[i], array[j]] = [array[j], array[i]];
//  }
//  return array;
//};















//data.js
//let getAvatarsArray = function (amount) {
//  let array = [];
//  for (let i = 0; i < amount; i++) {
//    array[i] = `img/avatars/user0${i + 1}.png`;
//  }
//  return window.utils.shuffleArray(array);
//};

//let avatarsMock = getAvatarsArray(amountAd);

//let getArrayAd = function (avatars, titles, minCost, maxCost, types, numberRooms, numberGuests, TimeCheckin, TimeCheckout, features, description, photos, minWidth, maxWidth, minHeight, maxHeight, amount) {
//  let newArrayAd = [];

//  for (let i = 0; i < amount; i++) {
//    window.utils.shuffleArray(features);
//    window.utils.shuffleArray(photos);
//    let locationX = window.utils.getRandomNumber(minWidth, maxWidth);
//    let locationY = window.utils.getRandomNumber(minHeight, maxHeight);
//    let obj = {
//      author: {
//        avatar: avatars[i]
//      },
//      offer: {
//        title: titles[i],
//        address: `${locationX}, ${locationY}`,
//        price: window.utils.getRandomNumber(minCost, maxCost),
//        type: types[window.utils.getRandomNumber(0, types.length - 1)],
//        rooms: numberRooms[window.utils.getRandomNumber(0, numberRooms.length - 1)],
//        guests: numberGuests[window.utils.getRandomNumber(0, numberGuests.length - 1)],
//        checkin: TimeCheckin[window.utils.getRandomNumber(0, TimeCheckin.length - 1)],
//        checkout: TimeCheckout[window.utils.getRandomNumber(0, TimeCheckout.length - 1)],
//        features: features.slice(0, window.utils.getRandomNumber(0, features.length)),
//        description: description[i],
//        photos: photos.slice(0, window.utils.getRandomNumber(0, photos.length))
//      },
//      location: {
//        x: locationX,
//        y: locationY
//      }
//    };
//    newArrayAd[i] = obj;
//  }
//  return newArrayAd;
//};

//let arrayAd = getArrayAd(avatarsMock, titlesMock, minPriceMock, maxPriceMock, houseType, amountRooms, amountGuests, checkinTime, checkoutTime, possibleFeatures, descriptionMock, possiblePhotos, minWidthLocationPin, maxWidthLocationPin, minHeightLocationPin, maxHeightLocationPin, amountAd);














//pin.js
//const mapPinTemplate = document.querySelector(`#pin`).content.querySelector(`.map__pin`);


//let renderPin = function (array) {
//  let newPin = mapPinTemplate.cloneNode(true);

//  newPin.style.left = array.location.x + offsetXPin + `px`;
//  newPin.style.top = array.location.y + offsetYPin + `px`;

//  let avatar = newPin.querySelector(`img`);
//  avatar.src = array.author.avatar;
//  avatar.alt = array.offer.title;

//  newPin.addObj = array;

//  return newPin;
//};











//map.js
//let getPinsBlock = function (array) {
//  let fragment = document.createDocumentFragment();
//  for (let i = 0; i < array.length; i++) {
//    fragment.append(window.pin.renderPin(array[i]));
//  }
//  return fragment;
//};















//card.js
// Рендер карточки метки
//const cardTemplate = document.querySelector(`#card`).content.querySelector(`.popup`);

//let renderCard = function (array) {
//  let newCard = cardTemplate.cloneNode(true);


//  let title = newCard.querySelector(`.popup__title`);
//  if (array.offer.title) {
//    title.textContent = array.offer.title;
//  } else {
//    title.remove();
//  }

//  let address = newCard.querySelector(`.popup__text--address`);
//  if (array.offer.address) {
//    address.textContent = array.offer.address;
//  } else {
//    address.remove();
//  }

//  let price = newCard.querySelector(`.popup__text--price`);
//  if (array.offer.price) {
//    price.textContent = `${array.offer.price}₽/ночь`;
//  } else {
//    price.remove();
//  }

//  let type = newCard.querySelector(`.popup__type`);
//  if (array.offer.type) {
//    type.textContent = houseTypeRus[array.offer.type];
//  } else {
//    type.remove();
//  }

//  let capacity = newCard.querySelector(`.popup__text--capacity`);
//  let roomWord = ``;
//  if (array.offer.rooms) {
//    if (array.offer.rooms === 1) {
//      roomWord = `${array.offer.rooms} комната`;
//    } else if (array.offer.rooms === 100) {
//      roomWord = `${array.offer.rooms} комнат`;
//    } else {
//      roomWord = `${array.offer.rooms} комнаты`;
//    }
//  }

//  let guestWord = ``;
//  if (array.offer.guests) {
//    if (array.offer.guests === 1) {
//      guestWord = `для ${array.offer.guests} гостя`;
//    } else {
//      guestWord = `для ${array.offer.guests} гостей`;
//    }
//  }

//  capacity.textContent = `${roomWord} ${guestWord}`;

//  let time = newCard.querySelector(`.popup__text--time`);
//  let timeIn = (array.offer.checkin) ? `Заезд после ${array.offer.checkin},` : ``;
//  let timeOut = (array.offer.checkout) ? `выезд&nbsp;до ${array.offer.checkout}` : ``;
//  time.innerHTML = `${timeIn} ${timeOut}`;

//  let features = newCard.querySelector(`.popup__features`);
//  features.innerHTML = ``;
//  if (array.offer.features) {
//    for (let feature of array.offer.features) {
//      let newFeatures = document.createElement(`li`);
//      newFeatures.classList.add(`popup__feature`, `popup__feature--${feature}`);
//      features.append(newFeatures);
//    }
//  } else {
//    features.remove();
//  }

//  let description = newCard.querySelector(`.popup__description`);
//  if (array.offer.description) {
//    description.textContent = array.offer.description;
//  } else {
//    description.remove();
//  }

//  let photos = newCard.querySelector(`.popup__photos`);
//  let photoPattern = photos.querySelector(`.popup__photo`);
//  photos.innerHTML = ``;

//  if (array.offer.photos) {
//    for (let photo of array.offer.photos) {
//      let newPhoto = photoPattern.cloneNode(true);
//      newPhoto.src = photo;
//      photos.append(newPhoto);
//    }
//  } else {
//    photos.remove();
//  }

//  let avatar = newCard.querySelector(`.popup__avatar`);
//  if (array.author.avatar) {
//    avatar.src = array.author.avatar;
//  } else {
//    avatar.remove();
//  }

//  return newCard;
//};

















//form.js
// Деактивация формы при первом открытии
//const adForm = document.querySelector(`.ad-form`);
//const adFormFieldsets = adForm.querySelectorAll(`fieldset`);
//const mapFilter = document.querySelector(`.map__filters`);
//const mapFilterFieldsets = mapFilter.querySelectorAll(`fieldset`);
//const mapFilterSelects = mapFilter.querySelectorAll(`select`);

//let deactivationPage = function () {
//  map.classList.add(`map--faded`);
//  adForm.classList.add(`ad-form--disabled`);

//  for (let fieldset of adFormFieldsets) {
//    fieldset.setAttribute(`disabled`, `disabled`);
//  }

//  for (let fieldset of mapFilterFieldsets) {
//    fieldset.setAttribute(`disabled`, `disabled`);
//  }

//  for (let select of mapFilterSelects) {
//    select.setAttribute(`disabled`, `disabled`);
//  }
//};

//deactivationPage();

// Заполнение поля Адрес при неактивном состоянии страницы
const mapPinMain = map.querySelector(`.map__pin--main`);
const adForm = document.querySelector(`.ad-form`);
const mapFilter = document.querySelector(`.map__filters`);
const adFormFieldsets = adForm.querySelectorAll(`fieldset`);
const mapFilterFieldsets = mapFilter.querySelectorAll(`fieldset`);
const mapFilterSelects = mapFilter.querySelectorAll(`select`);
// Заполнение поля Адрес при неактивном состоянии страницы
const addressInput = adForm.querySelector(`#address`);

addressInput.value =
  `${Math.round(parseInt(mapPinMain.style.left, 10) + mapPinMain.offsetWidth / 2)},
${Math.round(parseInt((mapPinMain.style.top), 10) + mapPinMain.offsetHeight / 2)}`;


//const addressInput = adForm.querySelector(`#address`);

//addressInput.value =
//  `${Math.round(parseInt(mapPinMain.style.left, 10) + mapPinMain.offsetWidth / 2)},
// ${Math.round(parseInt((mapPinMain.style.top), 10) + mapPinMain.offsetHeight / 2)}`;

//// Валидация поля "Количество гостей" и "Количество комнат"
//const roomNumberInput = adForm.querySelector(`#room_number`);
//const capacityInput = adForm.querySelector(`#capacity`);

//let validityCapacityInput = function () {
//  let roomValue = roomNumberInput.value;
//  let capacityValue = capacityInput.value;

//  if (Number(roomValue) === 100 && Number(capacityValue) !== 0) {
//    capacityInput.setCustomValidity(`Для выбранного значения Количество комнат: "100 комнат" подходит только вариант "Не для гостей"`);
//  } else if (Number(capacityValue) === 0 && Number(roomValue) !== 100) {
//    capacityInput.setCustomValidity(`Вариант "Не для гостей" подходит только для "100 комнат"`);
//  } else if (Number(roomValue) < Number(capacityValue)) {
//    capacityInput.setCustomValidity(`Количество гостей не соответствует количеству комнат. Для данного варианта количество гостей не должно превышать: ${Number(roomValue)} `);
//  } else {
//    capacityInput.setCustomValidity(``);
//  }
//  capacityInput.reportValidity();
//};

//capacityInput.addEventListener(`change`, function () {
//  validityCapacityInput();
//});

//roomNumberInput.addEventListener(`change`, function () {
//  validityCapacityInput();
//});

//// Валидация поля "Заголовок "
//const titleInput = adForm.querySelector(`#title`);
//const maxTitleLength = titleInput.getAttribute(`maxlength`);
//const minTitleLength = titleInput.getAttribute(`minlength`);

//titleInput.addEventListener(`input`, function () {
//  let valueLength = titleInput.value.length;

//  if (valueLength < minTitleLength) {
//    titleInput.setCustomValidity(`Ещё ${minTitleLength - valueLength} симв.`);
//  } else if (valueLength > maxTitleLength) {
//    titleInput.setCustomValidity(`Удалите ${(valueLength - maxTitleLength)} симв.`);
//  } else {
//    titleInput.setCustomValidity(``);
//  }

//  titleInput.reportValidity();
//});


//// Валидация полей "Цена за ночь" и "Тип жилья"

//const priceInput = adForm.querySelector(`#price`);
//const typeHouseInput = adForm.querySelector(`#type`);

//const minPricePerNight = {
//  bungalow: 0,
//  flat: 1000,
//  house: 5000,
//  palace: 10000
//};

//let validityPriceInput = function () {
//  let selectedTypeHouse = typeHouseInput.options[typeHouseInput.selectedIndex];

//  if (priceInput.value < minPricePerNight[typeHouseInput.value]) {
//    priceInput.setCustomValidity(`Минимальная цена за жилье класса "${selectedTypeHouse.textContent}": ${minPricePerNight[typeHouseInput.value]}`);
//  } else {
//    priceInput.setCustomValidity(``);
//  }

//  priceInput.reportValidity();
//};

//priceInput.addEventListener(`input`, function () {
//  validityPriceInput();
//});

//typeHouseInput.addEventListener(`change`, function () {
//  priceInput.setAttribute(`min`, minPricePerNight[typeHouseInput.value]);
//  priceInput.setAttribute(`placeholder`, minPricePerNight[typeHouseInput.value]);

//  validityPriceInput();
//});

//// Валидация полей "Время заезда" и "Время выезда"

//const timeinInput = adForm.querySelector(`#timein`);
//const timeoutInput = adForm.querySelector(`#timeout`);


//timeinInput.addEventListener(`change`, function () {
//  timeoutInput.value = timeinInput.value;
//});

//timeoutInput.addEventListener(`change`, function () {
//  timeinInput.value = timeoutInput.value;
//});











//main.js

const pinsList = map.querySelector(`.map__pins`);

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
    pinsList.append(window.map.getPinsBlock(window.data.arrayData));
  }

  //  Новые координаты для поля Адрес
  addressInput.value =
    `${Math.round(parseInt(mapPinMain.style.left, 10) + mapPinMain.offsetWidth / 2)},
 ${Math.round(parseInt((mapPinMain.style.top), 10) + mapPinMain.offsetHeight)}`;
}, {
  once: true
});


// Активация страницы по Enter
mapPinMain.addEventListener(`keydown`, function (evt) {
  evt.preventDefault();

  if (evt.key === `Enter`) {
    // Активация
    activationPage();

    //  Добавление меток
    pinsList.append(window.map.getPinsBlock(window.data.arrayData));
  }

  //  Новые координаты для поля Адрес
  addressInput.value =
    `${Math.round(parseInt(mapPinMain.style.left, 10) + mapPinMain.offsetWidth / 2)},
  ${Math.round(parseInt((mapPinMain.style.top), 10) + mapPinMain.offsetHeight)}`;
}, {
  once: true
});

//map.js
// Карточки с информацией

// Функция отрисовки карточки

const filtersContainer = document.querySelector(`.map__filters-container`);


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
      if (eventKey.key === `Escape`) {
        evt.preventDefault();
        renderNewCard.remove();
      }
    });
  }
};

// Добавление карточки
pinsList.addEventListener(`click`, function (evt) {
  appendNewCard(evt);
});

map.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    appendNewCard(evt);
  }
});
