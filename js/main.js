'use strict';
const map = document.querySelector(`.map`);

const amountAd = 8;
const minPrice = 0;
const maxPrice = 25000;
const houseType = [`palace`, `flat`, `house`, `bungalow`];
const amountRooms = [1, 2, 3, 100];
const amountGuests = [0, 1, 2, 3];
const checkinTime = [`12:00`, `13:00`, `14:00`];
const checkoutTime = [`12:00`, `13:00`, `14:00`];
const possibleFeatures = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`, `description`];
const titlesMock = [
  `Lorem, ipsum dolor.`,
  `Lorem, ipsum.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing.`,
  `Lorem.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non nam autem repudiandae.`,
  `Lorem ipsum dolor sit amet consectetur.`,
  `Lorem, ipsum.`,
  `Lorem ipsum dolor sit.`
];
const descriptionMock = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dignissimos.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, cumque placeat.`,
  `Lorem ipsum dolor sit amet consectetur.`,
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit illum blanditiis quaerat.`,
  `Lorem, ipsum dolor.`,
  `Lorem ipsum dolor sit amet.`
];
const possiblePhotos = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
];


// Возвращается 0 при попытке найти ширину newPin через offsetWidth, getComputedStyle, getBoundingClientRect(). Возможно, из-за того, что нет на странице. Задать вопрос
const offsetXPin = 50 / 2;
const offsetYPin = 70;
const minWidthLocationPin = 0;
const maxWidthLocationPin = map.clientWidth - offsetXPin * 2;
const minHeightLocationPin = 130;
const maxHeightLocationPin = 630 - offsetYPin;

let getRandomNumber = function (min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


let getAvatarsArray = function (amount) {
  let array = [];
  for (let i = 0; i < amount; i++) {
    array[i] = `img/avatars/user0${i + 1}.png`;
  }
  return shuffleArray(array);
};

let avatarsMock = getAvatarsArray(amountAd);

let getArrayAd = function (avatars, titles, minCost, maxCost, types, numberRooms, numberGuests, TimeCheckin, TimeCheckout, features, description, photos, minWidth, maxWidth, minHeight, maxHeight, amount) {
  let newArrayAd = [];

  for (let i = 0; i < amount; i++) {
    shuffleArray(features);
    shuffleArray(photos);
    let locationX = getRandomNumber(minWidth, maxWidth);
    let locationY = getRandomNumber(minHeight, maxHeight);
    let obj = {
      author: {
        avatar: avatars[i]
      },
      offer: {
        title: titles[i],
        adress: `${locationX}, ${locationY}`,
        price: getRandomNumber(minCost, maxCost),
        type: types[getRandomNumber(0, types.length - 1)],
        rooms: numberRooms[getRandomNumber(0, numberRooms.length - 1)],
        guests: numberGuests[getRandomNumber(0, numberGuests.length - 1)],
        checkin: TimeCheckin[getRandomNumber(0, TimeCheckin.length - 1)],
        checkout: TimeCheckout[getRandomNumber(0, TimeCheckout.length - 1)],
        features: features.slice(0, getRandomNumber(0, features.length - 1)),
        description: description[i],
        photos: photos.slice(0, getRandomNumber(0, photos.length - 1))
      },
      location: {
        x: locationX,
        y: locationY
      }
    };
    newArrayAd[i] = obj;
  }
  return newArrayAd;
};

let arrayAd = getArrayAd(avatarsMock, titlesMock, minPrice, maxPrice, houseType, amountRooms, amountGuests, checkinTime, checkoutTime, possibleFeatures, descriptionMock, possiblePhotos, minWidthLocationPin, maxWidthLocationPin, minHeightLocationPin, maxHeightLocationPin, amountAd);


const mapPinTemplate = document.querySelector(`#pin`).content.querySelector(`.map__pin`);


let renderPin = function (array) {
  let newPin = mapPinTemplate.cloneNode(true);

  newPin.style.left = array.location.x + offsetXPin + `px`;
  newPin.style.top = array.location.y + offsetYPin + `px`;

  let avatar = newPin.querySelector(`img`);
  avatar.src = array.author.avatar;
  avatar.alt = array.offer.title;

  return newPin;
};

let getPinsBlock = function (array) {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < array.length; i++) {
    fragment.append(renderPin(array[i]));
  }
  return fragment;
};

const pinsList = map.querySelector(`.map__pins`);
pinsList.append(getPinsBlock(arrayAd));
map.classList.remove(`map--faded`);
