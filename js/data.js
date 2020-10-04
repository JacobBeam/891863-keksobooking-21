'use strict';
(function () {

  const map = document.querySelector(`.map`);

  const amountAd = 8;
  const minPriceMock = 0;
  const maxPriceMock = 25000;
  const houseType = [`palace`, `flat`, `house`, `bungalow`];

  const amountRooms = [1, 2, 3, 100];
  const amountGuests = [0, 1, 2, 3];
  const checkinTime = [`12:00`, `13:00`, `14:00`];
  const checkoutTime = [`12:00`, `13:00`, `14:00`];
  const possibleFeatures = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
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


  let getAvatarsArray = function (amount) {
    let array = [];
    for (let i = 0; i < amount; i++) {
      array[i] = `img/avatars/user0${i + 1}.png`;
    }
    return window.utils.shuffleArray(array);
  };

  let avatarsMock = getAvatarsArray(amountAd);

  let getArrayAd = function (avatars, titles, minCost, maxCost, types, numberRooms, numberGuests, TimeCheckin, TimeCheckout, features, description, photos, minWidth, maxWidth, minHeight, maxHeight, amount) {
    let newArrayAd = [];

    for (let i = 0; i < amount; i++) {
      window.utils.shuffleArray(features);
      window.utils.shuffleArray(photos);
      let locationX = window.utils.getRandomNumber(minWidth, maxWidth);
      let locationY = window.utils.getRandomNumber(minHeight, maxHeight);
      let obj = {
        author: {
          avatar: avatars[i]
        },
        offer: {
          title: titles[i],
          address: `${locationX}, ${locationY}`,
          price: window.utils.getRandomNumber(minCost, maxCost),
          type: types[window.utils.getRandomNumber(0, types.length - 1)],
          rooms: numberRooms[window.utils.getRandomNumber(0, numberRooms.length - 1)],
          guests: numberGuests[window.utils.getRandomNumber(0, numberGuests.length - 1)],
          checkin: TimeCheckin[window.utils.getRandomNumber(0, TimeCheckin.length - 1)],
          checkout: TimeCheckout[window.utils.getRandomNumber(0, TimeCheckout.length - 1)],
          features: features.slice(0, window.utils.getRandomNumber(0, features.length)),
          description: description[i],
          photos: photos.slice(0, window.utils.getRandomNumber(0, photos.length))
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

  let arrayAd = getArrayAd(avatarsMock, titlesMock, minPriceMock, maxPriceMock, houseType, amountRooms, amountGuests, checkinTime, checkoutTime, possibleFeatures, descriptionMock, possiblePhotos, minWidthLocationPin, maxWidthLocationPin, minHeightLocationPin, maxHeightLocationPin, amountAd);

  window.data = {
    arrayData: arrayAd,
  };

})();
