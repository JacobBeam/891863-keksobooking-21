'use strict';

const cardTemplate = document.querySelector(`#card`).content.querySelector(`.popup`);

const houseTypeMap = {
  flat: `Квартира`,
  bungalow: `Бунгало`,
  house: `Дом`,
  palace: `Дворец`
};

window.card = {
  renderCard(array) {
    let newCard = cardTemplate.cloneNode(true);


    let title = newCard.querySelector(`.popup__title`);
    if (array.offer.title) {
      title.textContent = array.offer.title;
    } else {
      title.remove();
    }

    let address = newCard.querySelector(`.popup__text--address`);
    if (array.offer.address) {
      address.textContent = array.offer.address;
    } else {
      address.remove();
    }

    let price = newCard.querySelector(`.popup__text--price`);
    if (array.offer.price) {
      price.textContent = `${array.offer.price}₽/ночь`;
    } else {
      price.remove();
    }

    let type = newCard.querySelector(`.popup__type`);
    if (array.offer.type) {
      type.textContent = houseTypeMap[array.offer.type];
    } else {
      type.remove();
    }

    let capacity = newCard.querySelector(`.popup__text--capacity`);
    let roomWord = ``;
    if (array.offer.rooms) {
      switch (array.offer.rooms) {
        case 1:
          roomWord = `${array.offer.rooms} комната`;
          break;
        case 35:
          roomWord = `${array.offer.rooms} комнат`;
          break;
        case 100:
          roomWord = `${array.offer.rooms} комнат`;
          break;
        default:
          roomWord = `${array.offer.rooms} комнаты`;
      }
    }

    let guestWord = ``;
    if (array.offer.guests) {
      if (array.offer.guests === 1) {
        guestWord = `для ${array.offer.guests} гостя`;
      } else {
        guestWord = `для ${array.offer.guests} гостей`;
      }
    }

    capacity.textContent = `${roomWord} ${guestWord}`;

    let time = newCard.querySelector(`.popup__text--time`);
    let timeIn = (array.offer.checkin) ? `Заезд после ${array.offer.checkin},` : ``;
    let timeOut = (array.offer.checkout) ? `выезд&nbsp;до ${array.offer.checkout}` : ``;
    time.innerHTML = `${timeIn} ${timeOut}`;

    let features = newCard.querySelector(`.popup__features`);
    features.innerHTML = ``;
    if (array.offer.features) {
      array.offer.features.forEach((feature) => {
        let newFeatures = document.createElement(`li`);
        newFeatures.classList.add(`popup__feature`, `popup__feature--${feature}`);
        features.append(newFeatures);
      });

    } else {
      features.remove();
    }

    let description = newCard.querySelector(`.popup__description`);
    if (array.offer.description) {
      description.textContent = array.offer.description;
    } else {
      description.remove();
    }

    let photos = newCard.querySelector(`.popup__photos`);
    let photoPattern = photos.querySelector(`.popup__photo`);
    photos.innerHTML = ``;

    if (array.offer.photos) {

      array.offer.photos.forEach((photo) => {
        let newPhoto = photoPattern.cloneNode(true);
        newPhoto.src = photo;
        photos.append(newPhoto);
      });

    } else {
      photos.remove();
    }

    let avatar = newCard.querySelector(`.popup__avatar`);
    if (array.author.avatar) {
      avatar.src = array.author.avatar;
    } else {
      avatar.remove();
    }

    return newCard;
  }
};
