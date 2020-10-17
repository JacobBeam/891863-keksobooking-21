'use strict';
(function () {

  const MAX_PINS_AMOUNT = 5;
  const FILTER_RESET_VALUE = `any`;
  const mapFilters = document.querySelector(`.map__filters`);
  const housingTypeSelect = mapFilters.querySelector(`#housing-type`);

  let downloadedData;

  window.data = {
    ads: [],
    MAX_PINS_AMOUNT
  };

  let successLoadRequestHandler = (dataAds) => {
    window.data.ads = dataAds;
    downloadedData = dataAds;
  };

  let errorLoadRequestHandler = (errorMessage) => {
    let node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `fixed`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.backend.load(successLoadRequestHandler, errorLoadRequestHandler);

  housingTypeSelect.addEventListener(`change`, (evt) => {

    let value = evt.target.value;

    if (value === FILTER_RESET_VALUE) {
      window.data.ads = downloadedData;
    } else {
      let smaeHousingType = downloadedData.filter((ad) => {
        return ad.offer.type === value;
      });
      window.data.ads = smaeHousingType;
    }
    window.map.removePins();
    window.map.removeCard();
    window.map.renderPins();
  });
})();
