'use strict';
(function () {
  const urlLoad = `https://21.javascript.pages.academy/keksobooking/data`;
  const statusCode = {
    OK: 200
  };
  const timeout = 10000;

  const requestGet = `GET`;

  let requestHtml = function (request, url, onLoad, onError, data) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, function () {
      if (xhr.status === statusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError(`Произошла ошибка. Статус ответа: ${xhr.status}`);
      }
    });

    xhr.addEventListener(`error`, function () {
      onError(`Произошла ошибка соединения`);
    });

    xhr.addEventListener(`timeout`, function () {
      onError(`Запрос не успел выполниться за ${timeout} мс`);
    });

    xhr.open(request, url);
    switch (request) {
      case `GET`:
        xhr.send();
        break;
      case `POST`:
        xhr.send(data);
        break;
      default:
        xhr.send();
    }
  };

  window.backend = {
    load(onLoad, onError) {
      requestHtml(requestGet, urlLoad, onLoad, onError);
    }

  };

})();
