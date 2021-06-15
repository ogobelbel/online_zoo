let btnActive = document.querySelector('.menu-btn');
let preloaderEl = document.querySelector('.panda_load');
let burgerMenu = document.querySelector('.burger_menu');
let readLess = document.querySelector('.inform_extra');
let opacityBlock = document.querySelector('.opacity_block');
let readLessBtn = document.querySelector('.read');
let videoBlock = document.querySelectorAll('iframe');

// videos=======================================================================================

const gap = 20;

let carousel = document.querySelector(".prevs_wrapper"),
  content = document.querySelector(".prevs"),
  prev = document.querySelectorAll('.prev'),
  nextBtn = document.querySelector(".right_button_next"),
  prevBtn = document.querySelector(".left_button_prev"),
  overlay = document.querySelectorAll('.overlay');
  let width = carousel.offsetWidth;
  let aa = 0;
let prevVideoMemory = '';
let trans3d = 0;
for (let i = 0; i < prev.length; i++) {
  
  overlay[i].addEventListener('click',(e)=>{
    let videoMemory = videoBlock[0].src;
   videoBlock[0].src =  videoBlock[i+1].src;
   videoBlock[i+1].src = videoMemory;
   //(i)
   if(i>=0 && i<=4){
    videoBlock[i+5].src = videoMemory;
   }
   else{
    videoBlock[i-3].src = videoMemory;
   }
  })
}

nextBtn.addEventListener("click", e => {
  trans3d += 400;

  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {

  }
  carousel.scrollBy(width+gap , 0);
});
prevBtn.addEventListener("click", e => {
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
  }
  carousel.scrollBy(-(width + gap), 0);
});




readLessBtn.addEventListener('click', ()=>{
  if(readLess.classList.contains('read_less_active')){
    readLess.classList.remove('read_less_active');
    readLess.style.height = 'auto';
    opacityBlock.style.display = 'none';
  }
  else{
    readLess.classList.add('read_less_active');
    opacityBlock.style.display = 'block';
    readLess.style.height = '273px';
  }
  if(  readLessBtn.innerHTML == 'Read Less'){
    readLessBtn.innerHTML = 'Read more';
  }
  else{
    readLessBtn.innerHTML = 'Read Less';
  }
})


btnActive.addEventListener('click', ()=>{
  btnActive.classList.toggle('menu-btn_active')
  burgerMenu.classList.toggle('bm_active');

})

function loaded() {
  preloaderEl.classList.add('hidden');
  preloaderEl.classList.remove('visible');
}
document.addEventListener("DOMContentLoaded", loaded);

