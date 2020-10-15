'use strict';
(function () {

    const filtersContainer = document.querySelector(`.map__filters-container`);
    const map = document.querySelector(`.map`);
    const pinsList = map.querySelector(`.map__pins`);
    const pinsAmount = 5;

    let getPinsBlock = function (array) {
        let fragment = document.createDocumentFragment();
        for (let i = 0; i < pinsAmount; i++) {
            if (window.pin.renderPin(array[i])) {
                fragment.append(window.pin.renderPin(array[i]));
            }
        }
        return fragment;
    };

    let renderNewCard = null;

    let closeCard = function () {
        renderNewCard.remove();
        document.removeEventListener(`keydown`, onCardEscPress);
    };
    
    let onCardEscPress = function (evtEsc) {
        console.log('*** ESC')
        window.utils.isEscEvent(evtEsc, closeCard);
    };

    let appendNewCard = function (evt) {
        let buttonPin = evt.target.closest(`.map__pin`);
        let buttonPinMain = evt.target.closest(`.map__pin--main`);


        if (buttonPin && !buttonPinMain) {
            // Проверка, есть ли открытая карточка
            let mapCard = map.querySelector(`.map__card`);
            if (mapCard) {
                mapCard.remove();
            }


            // Отрисовка новой карточки
            renderNewCard = window.card.renderCard(buttonPin.addObj);

            filtersContainer.before(renderNewCard);

            let buttonCloseCard = renderNewCard.querySelector(`.popup__close`);

            buttonCloseCard.addEventListener(`click`, function () {
                closeCard();
            });

            document.addEventListener(`keydown`, onCardEscPress);
        }
    };


    window.map = {
        renderPins() {
            pinsList.append(getPinsBlock(window.data.arrayData));
        },
        removePins() {
            let pinsItem = pinsList.children;

            for (let i = pinsItem.length - 1; i >= 0; i--) {
                if (pinsItem[i].classList.contains(`map__pin`) && !pinsItem[i].classList.contains(`map__pin--main`)) {
                    pinsItem[i].remove();
                }
            }
        },
        renderCardOnClick() {
            pinsList.addEventListener(`click`, function (evt) {
                appendNewCard(evt);
            });
        },
        renderCardOnEnter() {
            map.addEventListener(`keydown`, function (evt) {
                if (evt.key === `Enter`) {
                    evt.preventDefault();
                    appendNewCard(evt);
                }
            });
        },
        removeCard() {
            let card = map.querySelector(`.map__card`);
            if (card) {
                card.remove();
            }
        }
    };

})();
