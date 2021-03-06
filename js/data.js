'use strict';

const MAX_PINS_AMOUNT = 5;
const FILTER_RESET_VALUE = `any`;
const map = document.querySelector(`.map`);
const mapFilters = map.querySelector(`.map__filters`);
const mapFilterSelects = mapFilters.querySelectorAll(`select`);
const housingTypeSelect = mapFilters.querySelector(`#housing-type`);
const housingPriceSelect = mapFilters.querySelector(`#housing-price`);
const housingRoomseSelect = mapFilters.querySelector(`#housing-rooms`);
const housingGuestsSelect = mapFilters.querySelector(`#housing-guests`);
const checkboxes = mapFilters.querySelectorAll(`input[type="checkbox"]`);
const priceMap = {
  boundHighValue: 50000,
  boundLowValue: 10000,
  high: `high`,
  middle: `middle`,
  low: `low`
};


let onSuccessLoadRequest = (dataAds) => {
  window.data.ads = dataAds;
  window.data.downloadedData = dataAds;
  window.map.renderPins();
  activationMapFilters();
};

let onErrorLoadRequest = (errorMessage) => {
  let node = document.createElement(`div`);
  node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
  node.style.position = `fixed`;
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = `30px`;

  node.textContent = errorMessage;
  document.body.insertAdjacentElement(`afterbegin`, node);
};

window.data = {
  ads: [],
  maxPinsAmount: MAX_PINS_AMOUNT,
  downloadedData: null,
  onSuccessLoadRequest,
  onErrorLoadRequest
};


let activationMapFilters = () => {

  let buttonPin = map.querySelectorAll(`.map__pin`);
  if (buttonPin.length > 1) {
    for (let checkbox of checkboxes) {

      checkbox.removeAttribute(`disabled`);
    }

    for (let select of mapFilterSelects) {
      select.removeAttribute(`disabled`);
    }
  }
};


let searchMatches = (where, what) => {
  let isMatches = true;
  what.forEach((element) => {

    if (where.indexOf(element) === -1) {
      isMatches = false;
    }
  });

  return isMatches;
};

let rerenderPins = () => {
  window.map.removePins();
  window.map.removeCard();
  window.map.renderPins();
};

mapFilters.addEventListener(`change`, () => {


  let checkboxValues = [];

  for (let check of checkboxes) {
    if (check.checked) {
      checkboxValues.push(check.value);
    }
  }

  let filteredData = window.data.downloadedData.filter((ad) => {

    let price;
    if (ad.offer.price > priceMap.boundHighValue) {
      price = priceMap.high;
    } else if (ad.offer.price < priceMap.boundLowValue) {
      price = priceMap.low;
    } else {
      price = priceMap.middle;
    }

    return (ad.offer.type === housingTypeSelect.value || housingTypeSelect.value === FILTER_RESET_VALUE) &&
      (price === housingPriceSelect.value || housingPriceSelect.value === FILTER_RESET_VALUE) &&
      (ad.offer.rooms === Number(housingRoomseSelect.value) || housingRoomseSelect.value === FILTER_RESET_VALUE) &&
      (ad.offer.guests === Number(housingGuestsSelect.value) || housingGuestsSelect.value === FILTER_RESET_VALUE) &&
      searchMatches(ad.offer.features, checkboxValues);
  });

  window.data.ads = filteredData;

  window.utils.debounce(rerenderPins);
});
