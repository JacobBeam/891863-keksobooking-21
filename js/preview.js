'use strict';
(function () {
  const FILE_TYPES = [`gif`, `jpg`, `jpeg`, `png`];
  const adForm = document.querySelector(`.ad-form`);
  const avatarInput = adForm.querySelector(`#avatar`);
  const avatarPreview = adForm.querySelector(`.ad-form-header__preview img`);
  const photoInput = adForm.querySelector(`#images`);
  const photoPreview = adForm.querySelector(`.ad-form__photo`);

  let placePreview = (input, element) => {

    input.addEventListener(`change`, () => {
      let file = input.files[0];
      let fileName = file.name.toLowerCase();

      let matches = FILE_TYPES.some((it) => {
        return fileName.endsWith(it);
      });

      if (matches) {
        let reader = new FileReader();

        reader.addEventListener(`load`, () => {
          if (element.tagName === `IMG`) {
            element.src = reader.result;
          } else {
            element.innerHTML = ``;
            element.style = ` display:flex; justify-content:center;align-items:center;`;
            let img = document.createElement(`img`);
            img.src = reader.result;
            img.alt = `Превью загруженной фотографии`;
            img.style = ` max-width:100%; width:100%;`;
            element.append(img);
          }

        });

        reader.readAsDataURL(file);
      }
    });
  };

  placePreview(avatarInput, avatarPreview);
  placePreview(photoInput, photoPreview);

})();
