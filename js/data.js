'use strict';
(function () {

  const pinsAmount = 5;
  const filterResetValue = `any`;
  let downloadedData;

  window.data = {
    arrayData: [],
    pinsAmount
  };

  let successLoadRequestHandler = function (dataAds) {

    window.data.arrayData = dataAds;
    downloadedData = dataAds;

  };

  let errorLoadRequestHandler = function (errorMessage) {
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


  const map = document.querySelector(`.map`);
  const housingTypeSelect = map.querySelector(`#housing-type`);

  housingTypeSelect.addEventListener(`change`, function (evt) {

    let value = evt.target.value;

    if (value === filterResetValue) {
      window.data.arrayData = downloadedData;
    } else {
      let smaeHousingType = downloadedData.filter(function (ad) {
        return ad.offer.type === value;
      });
      window.data.arrayData = smaeHousingType;
    }
    window.map.removePins();
    window.map.removeCard();
    window.map.renderPins();
  });


})();
