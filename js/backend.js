'use strict';

const URL_LOAD = `https://21.javascript.pages.academy/keksobooking/data`;
const URL_UPLOAD = `https://21.javascript.pages.academy/keksobooking`;
const TIMEOUT = 10000;

const StatusCode = {
  OK: 200
};

const RequestType = {
  GET: `GET`,
  POST: `POST`
};


let requestOnServer = (request, url, onLoad, onError, data) => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = `json`;

  xhr.addEventListener(`load`, () => {
    if (xhr.status === StatusCode.OK) {
      onLoad(xhr.response);
    } else {
      onError(`Произошла ошибка. Статус ответа: ${xhr.status}`);
    }
  });

  xhr.addEventListener(`error`, () => {
    onError(`Произошла ошибка соединения`);
  });

  xhr.addEventListener(`timeout`, () => {
    onError(`Запрос не успел выполниться за ${TIMEOUT} мс`);
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

let load = (onLoad, onError) => {
  requestOnServer(RequestType.GET, URL_LOAD, onLoad, onError);
};

let upload = (data, onLoad, onError) => {
  requestOnServer(RequestType.POST, URL_UPLOAD, onLoad, onError, data);
};

window.backend = {
  load,
  upload
};
