let btnActive = document.querySelector('.menu-btn');
let preloaderEl = document.querySelector('.panda_load');
let burgerMenu = document.querySelector('.burger_menu');

btnActive.addEventListener('click', () => {
  btnActive.classList.toggle('menu-btn_active')
  burgerMenu.classList.toggle('bm_active');

})

function loaded() {
  preloaderEl.classList.add('hidden');
  preloaderEl.classList.remove('visible');
}
document.addEventListener("DOMContentLoaded", loaded);


// карусель животных=======================================================================

const gap = 18.7;

let carousel = document.querySelector(".landing_page__animals_block"),
  content = document.querySelector(".line1"),
  contentLine2 = document.querySelector(".line2"),
  next = document.querySelector(".right"),
  prev = document.querySelector(".left"),
  wrapContent = document.querySelectorAll(".wrapper_line1"),
  wrapContent2 = document.querySelectorAll(".wrapper_line2"),
  animalIcon1 = document.querySelectorAll('.line1 figure'),
  animalIcon2 = document.querySelectorAll('.line2 figure');
let width = carousel.offsetWidth;
let aa = 0;
//(animalIcon1, animalIcon2)
let trans3d = 0;
next.addEventListener("click", e => {
  memory3d = 1160;
  content.style.WebkitJustifyContent = 'flex-start';
  contentLine2.style.WebkitJustifyContent = 'flex-start';
  content.style.transition = 'none';
  contentLine2.style.transition = 'none';
  content.style.transform = `translate3d(${0}px, 0px, 0px)`;
  contentLine2.style.transform = `translate3d(${0}px, 0px, 0px)`;
  trans3d += 400;
  //(width );

  //('уонец')
  let copy = wrapContent[0].cloneNode(true);
  let copy2 = wrapContent2[0].cloneNode(true);
  wrapContent[wrapContent.length - 1].after(copy);
  wrapContent2[wrapContent2.length - 1].after(copy2);
  wrapContent = document.querySelectorAll(".wrapper_line1");
  wrapContent2 = document.querySelectorAll(".wrapper_line2");
  carousel.scrollBy(width, 0);
  //(wrapContent.length)


  if (wrapContent.length >= 20) {
    function a() {

      for (let i = 0; i < wrapContent.length - 6; i++) {
        wrapContent[i].remove();
        wrapContent2[i].remove();
      }
    }
    setTimeout(a, 600);
  }
});

let memory3d = 1160;
prev.addEventListener("click", e => {
  content.style.WebkitJustifyContent = 'flex-end';
  contentLine2.style.WebkitJustifyContent = 'flex-end';
  content.style.transition = 'all 1s';
  contentLine2.style.transition = 'all 1s';
  content.style.transform = `translate3d(${memory3d}px, 0px, 0px)`;
  contentLine2.style.transform = `translate3d(${memory3d}px, 0px, 0px)`;
  memory3d += width;

  let copy = wrapContent[0].cloneNode(true);
  let copy2 = wrapContent2[0].cloneNode(true);
  wrapContent[0].after(copy);
  wrapContent2[0].after(copy2);
  wrapContent = document.querySelectorAll(".wrapper_line1");
  wrapContent2 = document.querySelectorAll(".wrapper_line2");

  if (wrapContent.length == 100) {
    function a() {

      for (let i = 0; i < 50; i++) {
        wrapContent[i].remove();
        wrapContent2[i].remove();
      }
      memory3d -= 70 * width;
      //(memory3d)
      content.style.transition = 'none';
      contentLine2.style.transition = 'none';
      content.style.transform = `translate3d(${memory3d}px, 0px, 0px)`;
      contentLine2.style.transform = `translate3d(${memory3d}px, 0px, 0px)`;

    }
    setTimeout(a, 1000);
  }

});


window.addEventListener("resize", () => {
  width = carousel.offsetWidth;
  //(carousel.offsetWidth)
});


// отзывы=======================================================================

const carousel2 = document.querySelector(".testimonials"),
  content2 = document.querySelector(".testi_elems"),
  range = document.querySelector(".scroll");
let scrolValue = 0;
let gap2 = 6;
let scrollFlag = true;
let width2 = carousel2.offsetWidth;
//(animalIcon1, animalIcon2)
range.addEventListener("input", e => {
  scrollFlag = false;
  if (range.value > scrolValue) {
    //('начало')
    //(content2.scrollWidth)
    carousel2.scrollBy(width2 / 4 + gap2, 0);
    scrolValue++;
  } else {
    //('конец');
    carousel2.scrollBy(-(width2 / 4 + gap2), 0);
    scrolValue--;
  }
});

range.addEventListener("mouseenter", e => {
  scrollFlag = false;

})
range.addEventListener("mouseout", e => {
  setTimeout(scrollingFlag, 5000);
})

content2.addEventListener('click', () => {
  scrollFlag = false;
  setTimeout(scrollingFlag, 40000);
  //('sss')
})


function scrollingFlag() {
  scrollFlag = true;
}

let flag = false;

function autoScroll() {
  if (scrollFlag == true) {
    range.value++;

    if (range.value == 4 && flag == true) {
      range.value = 0;
      flag = false;
      carousel2.scrollBy(-(width2 + gap2 * 4), 0);
      scrolValue = 0;
    }

    if (range.value == 4) {
      flag = true;
    }

    if (range.value > scrolValue) {
      //('начало')
      //(content2.scrollWidth)
      carousel2.scrollBy(width2 / 4 + gap2, 0);
      scrolValue++;
    }
  }
}

setInterval(autoScroll, 10000)

window.addEventListener("resize", () => {
  width = carousel.offsetWidth;
  //(carousel.offsetWidth)
});