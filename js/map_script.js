let btnActive = document.querySelector('.menu-btn');
let preloaderEl = document.querySelector('.panda_load');
let burgerMenu = document.querySelector('.burger_menu');
const mapWrapper = document.querySelector('.bg_wrapper');
const mapImage = document.querySelector('.map_bg');
const header = document.querySelector('.header__wrapper');
const footer = document.querySelector('.footer_big');
const panda_map = document.querySelector('.panda_map');
const eagle1_map = document.querySelector('.eagle1_map');
const gorilla_map = document.querySelector('.gorilla_map');
const croco_map = document.querySelector('.croco_map');
const zoomInButton = document.querySelector('.map_zoom1');
const zoomOutButton = document.querySelector('.map_zoom2');
const animalImg = document.querySelector('.animal_img');
const overlay_map = document.querySelector('.overlay_map');

let pandaTop = 432;
let pandaLeft = 801;
let eagleTop = 466;
let eagleLeft = 65;
let crocoTop = 536;
let crocoLeft = 260;
let gorillaTop = 626;
let gorillaLeft = 542;

zoomInButton.addEventListener('click', (e) => {

  CalcCoords(e, mapImage);
  moveAt(e);
  mapImage.style.position = 'absolute';
  //(mapImage.width)
  if (mapImage.width < 1083 * 2) {
    mapImage.style.width = `${mapImage.width*1.25}px`;

    pandaTop *= 1.21;
    pandaLeft *= 1.265;
    eagleTop *= 1.215;
    eagleLeft *= 1.48;
    crocoTop *= 1.208;
    crocoLeft *= 1.25;
    gorillaTop *= 1.21;
    gorillaLeft *= 1.255;
    CalcCoords(e, mapImage);
    moveAt(e);
  }

})
zoomOutButton.addEventListener('click', (e) => {
  CalcCoords(e, mapImage);
  moveAt(e);
  //(mapImage.width)
  if (mapImage.width > '1083') {
    mapImage.style.width = `${mapImage.width/1.25}px`;
    pandaTop /= 1.21;
    pandaLeft /= 1.265;
    eagleTop /= 1.215;
    eagleLeft /= 1.48;
    crocoTop /= 1.208;
    crocoLeft /= 1.25;
    gorillaTop /= 1.21;
    gorillaLeft /= 1.255;
    CalcCoords(e, mapImage);
    moveAt(e);
  }
  if (mapImage.width == 1083) {
    mapImage.style.position = 'static';
    CalcCoords(e, mapImage);
    moveAt(e);
  }

})

let topIndent = 0;
let leftIndent = 0;
let leftCoord = 0;
let topCoord = 0;
const CalcCoords = (e, elem) => {
  var box = elem.getBoundingClientRect();
  topIndent = e.pageY - box.top;
  leftIndent = e.pageX - box.left - pageXOffset;
}


const moveAt = (e) => {

  mapImage.style.position = 'absolute';
  leftCoord = e.pageX - leftIndent;
  mapImage.style.left = leftCoord + 'px';
  if (e.pageX >= mapWrapper.offsetWidth) {
    stopDrag();

  } else if (e.pageX <= 0) {
    stopDrag();
  }
  topCoord = e.pageY - (80 - pageYOffset) - topIndent;
  mapImage.style.top = topCoord + 'px';

  panda_map.style.top = pandaTop + topCoord + 'px';
  panda_map.style.left = pandaLeft + leftCoord + 'px';
  //(mapImage.getBoundingClientRect().left, leftCoord, e.pageX)

  eagle1_map.style.top = eagleTop + topCoord + 'px';
  eagle1_map.style.left = eagleLeft + leftCoord + 'px';

  gorilla_map.style.top = gorillaTop + topCoord + 'px';
  gorilla_map.style.left = gorillaLeft + leftCoord + 'px';

  croco_map.style.top = crocoTop + topCoord + 'px';
  croco_map.style.left = crocoLeft + leftCoord + 'px';
}


const stopDrag = () => {
  document.removeEventListener('mousemove', moveAt);
  document.removeEventListener('mouseup', stopDrag);
}

mapImage.addEventListener('mousedown', (e) => {

  CalcCoords(e, mapImage);

  moveAt(e);
  document.addEventListener('mousemove', moveAt);
  document.addEventListener('mouseup', stopDrag);
})


mapImage.ondragstart = function () {
  return false;
};

btnActive.addEventListener('click', () => {
  btnActive.classList.toggle('menu-btn_active')
  burgerMenu.classList.toggle('bm_active');

})

function loaded(e) {
  mapImage.style.position = 'static';
  preloaderEl.classList.add('hidden');
  preloaderEl.classList.remove('visible');
  var evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  });

  CalcCoords(evt, mapImage);

  moveAt(evt);
}
document.addEventListener("DOMContentLoaded", loaded);
footer.addEventListener('mousemove', stopDrag);
header.addEventListener('mousemove', stopDrag);
window.addEventListener("resize", (e) => {
  mapImage.style.position = 'static';
  var evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  });
  //('hi')
  CalcCoords(evt, mapImage);

  moveAt(evt);

});