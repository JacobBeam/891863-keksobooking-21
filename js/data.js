'use strict';
(function () {

  let successLoadRequestHandler = function (dataAds) {

    window.data = {
      arrayData: dataAds,
    };
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
})();
