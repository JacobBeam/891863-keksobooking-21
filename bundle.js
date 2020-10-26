(()=>{"use strict";(()=>{let e;window.utils={getRandomNumber(e,t){let r=e+Math.random()*(t+1-e);return Math.floor(r)},shuffleArray(e){for(let t=e.length-1;t>0;t--){let r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},isEscEvent(e,t){"Escape"===e.key&&(e.preventDefault(),t())},debounce(t){e&&window.clearTimeout(e),e=window.setTimeout(t,500)}}})(),(()=>{const e="GET",t="POST";let r=(e,t,r,o,n)=>{let a=new XMLHttpRequest;switch(a.responseType="json",a.addEventListener("load",(()=>{200===a.status?r(a.response):o("Произошла ошибка. Статус ответа: "+a.status)})),a.addEventListener("error",(()=>{o("Произошла ошибка соединения")})),a.addEventListener("timeout",(()=>{o("Запрос не успел выполниться за 10000 мс")})),a.open(e,t),e){case"GET":a.send();break;case"POST":a.send(n);break;default:a.send()}};window.backend={load(t,o){r(e,"https://21.javascript.pages.academy/keksobooking/data",t,o)},upload(e,o,n){r(t,"https://21.javascript.pages.academy/keksobooking",o,n,e)}}})(),(()=>{const e="any",t=document.querySelector(".map"),r=t.querySelector(".map__filters"),o=r.querySelectorAll("select"),n=r.querySelector("#housing-type"),a=r.querySelector("#housing-price"),d=r.querySelector("#housing-rooms"),l=r.querySelector("#housing-guests"),i=r.querySelectorAll('input[type="checkbox"]'),s=5e4,u=1e4,c="high",p="middle",m="low";window.data={ads:[],maxPinsAmount:5,downloadedData:null,successLoadRequestHandler(e){window.data.ads=e,window.data.downloadedData=e,window.map.renderPins(),f()},errorLoadRequestHandler(e){let t=document.createElement("div");t.style="z-index: 100; margin: 0 auto; text-align: center; background-color: red;",t.style.position="fixed",t.style.left=0,t.style.right=0,t.style.fontSize="30px",t.textContent=e,document.body.insertAdjacentElement("afterbegin",t)}};let f=()=>{if(t.querySelectorAll(".map__pin").length>1){for(let e of i)e.removeAttribute("disabled");for(let e of o)e.removeAttribute("disabled")}},y=()=>{window.map.removePins(),window.map.removeCard(),window.map.renderPins()};r.addEventListener("change",(()=>{let t=[];for(let e of i)e.checked&&t.push(e.value);let r=window.data.downloadedData.filter((r=>{let o;return o=r.offer.price>s?c:r.offer.price<u?m:p,(r.offer.type===n.value||n.value===e)&&(o===a.value||a.value===e)&&(r.offer.rooms===Number(d.value)||d.value===e)&&(r.offer.guests===Number(l.value)||l.value===e)&&((e,t)=>{let r=!0;return t.forEach((t=>{-1===e.indexOf(t)&&(r=!1)})),r})(r.offer.features,t)}));window.data.ads=r,window.utils.debounce(y)}))})(),(()=>{const e=document.querySelector(".map").querySelector(".map__pin--main"),t=e.offsetWidth/2,r=e.offsetHeight/2,o=document.querySelector(".ad-form"),n=o.querySelector("#address"),a=document.querySelector(".ad-form__reset"),d=o.querySelector("#room_number"),l=o.querySelector("#capacity"),i=o.querySelector("#title"),s=i.getAttribute("maxlength"),u=i.getAttribute("minlength"),c=o.querySelector("#price"),p=o.querySelector("#type"),m={bungalow:0,flat:1e3,house:5e3,palace:1e4};window.form={getStartMainPinCoords(){n.value=`${Math.round(parseInt(e.style.left,10)+t)},\n${Math.round(parseInt(e.style.top,10)+r)}`},getMainPinCoords(){n.value=`${Math.round(parseInt(e.style.left,10)+t)},\n${Math.round(parseInt(e.style.top,10)+80)}`}};const f=o.querySelector("#timein"),y=o.querySelector("#timeout"),v=document.querySelector("#success").content.querySelector(".success"),w=document.querySelector("#error").content.querySelector(".error"),g=document.querySelector("main");let h=()=>{let e=d.value,t=l.value;100===Number(e)&&0!==Number(t)?l.setCustomValidity('Для выбранного значения Количество комнат: "100 комнат" подходит только вариант "Не для гостей"'):0===Number(t)&&100!==Number(e)?l.setCustomValidity('Вариант "Не для гостей" подходит только для "100 комнат"'):Number(e)<Number(t)?l.setCustomValidity(`Количество гостей не соответствует количеству комнат. Для данного варианта количество гостей не должно превышать: ${Number(e)} `):l.setCustomValidity(""),l.reportValidity()};l.addEventListener("change",(()=>{h()})),d.addEventListener("change",(()=>{h()})),i.addEventListener("input",(()=>{let e=i.value.length;e<u?i.setCustomValidity(`Ещё ${u-e} симв.`):e>s?i.setCustomValidity(`Удалите ${e-s} симв.`):i.setCustomValidity(""),i.reportValidity()}));let q=()=>{let e=p.options[p.selectedIndex];c.value<m[p.value]?c.setCustomValidity(`Минимальная цена за жилье класса "${e.textContent}": ${m[p.value]}`):c.setCustomValidity(""),c.reportValidity()};c.addEventListener("input",(()=>{q()})),p.addEventListener("change",(()=>{c.setAttribute("min",m[p.value]),c.setAttribute("placeholder",m[p.value]),q()})),f.addEventListener("change",(()=>{y.value=f.value})),y.addEventListener("change",(()=>{f.value=y.value}));let S=v.cloneNode(!0),_=w.cloneNode(!0),b=e=>{window.utils.isEscEvent(e,L)},E=e=>{e.preventDefault(),L()},L=()=>{S.remove(),_.remove(),document.removeEventListener("keydown",b),document.removeEventListener("click",E)},k=e=>{g.append(e),document.addEventListener("keydown",b),e.addEventListener("click",E)},C=()=>{k(S),o.reset(),window.main.deactivationPage()},x=()=>{k(_)};o.addEventListener("submit",(e=>{e.preventDefault(),window.backend.upload(new FormData(o),C,x)})),a.addEventListener("click",(e=>{e.preventDefault(),o.reset(),window.main.deactivationPage()}))})(),(()=>{const e=["gif","jpg","jpeg","png"],t=document.querySelector(".ad-form"),r=t.querySelector("#avatar"),o=t.querySelector(".ad-form-header__preview img"),n=t.querySelector("#images"),a=t.querySelector(".ad-form__photo");let d=(t,r)=>{t.addEventListener("change",(()=>{let o=t.files[0],n=o.name.toLowerCase();if(e.some((e=>n.endsWith(e)))){let e=new FileReader;e.addEventListener("load",(()=>{if("IMG"===r.tagName)r.src=e.result;else{r.innerHTML="",r.style=" display:flex; justify-content:center;align-items:center;";let t=document.createElement("img");t.src=e.result,t.alt="Превью загруженной фотографии",t.style=" max-width:100%; width:100%;",r.append(t)}})),e.readAsDataURL(o)}}))};d(r,o),d(n,a)})(),(()=>{const e=document.querySelector("#pin").content.querySelector(".map__pin");window.pin={renderPin(t){if(t.offer){let r=e.cloneNode(!0);r.style.left=t.location.x-25+"px",r.style.top=t.location.y-70+"px";let o=r.querySelector("img");return o.src=t.author.avatar,o.alt=t.offer.title,r.addObj=t,r}}}})(),(()=>{const e=document.querySelector("#card").content.querySelector(".popup"),t={flat:"Квартира",bungalow:"Бунгало",house:"Дом",palace:"Дворец"};window.card={renderCard(r){let o=e.cloneNode(!0),n=o.querySelector(".popup__title");r.offer.title?n.textContent=r.offer.title:n.remove();let a=o.querySelector(".popup__text--address");r.offer.address?a.textContent=r.offer.address:a.remove();let d=o.querySelector(".popup__text--price");r.offer.price?d.textContent=r.offer.price+"₽/ночь":d.remove();let l=o.querySelector(".popup__type");r.offer.type?l.textContent=t[r.offer.type]:l.remove();let i=o.querySelector(".popup__text--capacity"),s="";if(r.offer.rooms)switch(r.offer.rooms){case 1:s=r.offer.rooms+" комната";break;case 35:case 100:s=r.offer.rooms+" комнат";break;default:s=r.offer.rooms+" комнаты"}let u="";r.offer.guests&&(u=1===r.offer.guests?`для ${r.offer.guests} гостя`:`для ${r.offer.guests} гостей`),i.textContent=`${s} ${u}`;let c=o.querySelector(".popup__text--time"),p=r.offer.checkin?`Заезд после ${r.offer.checkin},`:"",m=r.offer.checkout?"выезд&nbsp;до "+r.offer.checkout:"";c.innerHTML=`${p} ${m}`;let f=o.querySelector(".popup__features");f.innerHTML="",r.offer.features?r.offer.features.forEach((e=>{let t=document.createElement("li");t.classList.add("popup__feature","popup__feature--"+e),f.append(t)})):f.remove();let y=o.querySelector(".popup__description");r.offer.description?y.textContent=r.offer.description:y.remove();let v=o.querySelector(".popup__photos"),w=v.querySelector(".popup__photo");v.innerHTML="",r.offer.photos?r.offer.photos.forEach((e=>{let t=w.cloneNode(!0);t.src=e,v.append(t)})):v.remove();let g=o.querySelector(".popup__avatar");return r.author.avatar?g.src=r.author.avatar:g.remove(),o}}})(),(()=>{const e=document.querySelector(".map__filters-container"),t=document.querySelector(".map"),r=t.querySelector(".map__pins");let o=null,n=()=>{o.remove(),document.removeEventListener("keydown",a)},a=e=>{window.utils.isEscEvent(e,n)},d=r=>{let d=r.target.closest(".map__pin"),l=r.target.closest(".map__pin--main");if(d&&!l){let r=t.querySelector(".map__card");r&&r.remove(),o=window.card.renderCard(d.addObj),e.before(o),o.querySelector(".popup__close").addEventListener("click",(()=>{n()})),document.addEventListener("keydown",a)}};window.map={renderPins(){r.append((e=>{let t=document.createDocumentFragment(),r=e.length>window.data.maxPinsAmount?window.data.maxPinsAmount:e.length;for(let o=0;o<r;o++)window.pin.renderPin(e[o])&&t.append(window.pin.renderPin(e[o]));return t})(window.data.ads))},removePins(){let e=r.children;for(let t=e.length-1;t>=0;t--)e[t].classList.contains("map__pin")&&!e[t].classList.contains("map__pin--main")&&e[t].remove()},renderCardOnClick(){r.addEventListener("click",(e=>{d(e)}))},renderCardOnEnter(){t.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),d(e))}))},removeCard(){let e=t.querySelector(".map__card");e&&(e.remove(),document.removeEventListener("keydown",a))}}})(),(()=>{const e=document.querySelector(".map"),t=e.querySelector(".map__pin--main"),r=document.querySelector(".ad-form"),o=document.querySelector(".map__filters"),n=r.querySelectorAll("fieldset"),a=o.querySelectorAll("select"),d=o.querySelectorAll('input[type="checkbox"]');let l=()=>{e.classList.add("map--faded"),r.classList.add("ad-form--disabled");for(let e of n)e.setAttribute("disabled","disabled");for(let e of d)e.checked=!1,e.setAttribute("disabled","disabled");for(let e of a)e.value="any",e.setAttribute("disabled","disabled");t.addEventListener("mousedown",(e=>{e.preventDefault(),0===e.button&&(i(),window.form.getMainPinCoords())}),{once:!0}),t.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),i(),window.form.getMainPinCoords())}),{once:!0}),window.form.getStartMainPinCoords(),window.map.removePins(),window.map.removeCard()};l();let i=()=>{window.backend.load(window.data.successLoadRequestHandler,window.data.errorLoadRequestHandler),e.classList.remove("map--faded"),r.classList.remove("ad-form--disabled");for(let e of n)e.removeAttribute("disabled")};window.map.renderCardOnClick(),window.map.renderCardOnEnter(),window.main={deactivationPage(){l()}}})(),(()=>{const e=document.querySelector(".map"),t=e.querySelector(".map__pin--main"),r=e.getBoundingClientRect(),o=t.offsetWidth/2,n=0-o,a=e.clientWidth-o,d=130+t.offsetHeight;t.addEventListener("mousedown",(e=>{e.preventDefault();let l={x:e.clientX,y:e.clientY},i=e=>{e.preventDefault();let i=l.x-e.clientX,s=l.y-e.clientY;l={x:e.clientX,y:e.clientY},e.clientY<d-pageYOffset?t.style.top=d-pageYOffset:e.clientY>630-pageYOffset?t.style.top=630-pageYOffset:t.style.top=t.offsetTop-s+"px",e.clientX<r.left+o?t.style.left=n:e.clientX>r.right?t.style.left=a+"px":t.style.left=t.offsetLeft-i+"px",window.form.getMainPinCoords()},s=e=>{e.preventDefault(),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",s),window.form.getMainPinCoords()};document.addEventListener("mousemove",i),document.addEventListener("mouseup",s)}))})()})();