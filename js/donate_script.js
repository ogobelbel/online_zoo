let btnActive = document.querySelector('.menu-btn');
let preloaderEl = document.querySelector('.panda_load');
let burgerMenu = document.querySelector('.burger_menu');
let popUpDonate = document.querySelector('.donate_pop_up');
let popUpDonateButton = document.getElementById('popup_button');
let formButton = document.querySelector('.form_button');
let popUpForm = document.querySelector('.pop_wrapper');
let cardName = document.getElementById('card_name');
let cardType = document.getElementById('card_type');
let cardNumber = document.getElementById('card_number');
let cardEx = document.getElementById('card_expiration');
let cardEx2 = document.getElementById('card_expiration2');
let cardSec = document.getElementById('card_sec');
let circleButtons = document.querySelectorAll('.circle_button');
let circleButtons2 = document.querySelectorAll('.circle_button2');
let valueDonate = document.querySelectorAll('.value_donate');
let amoun_circle = document.querySelector('.amoun_circle');
let anotherAmount = document.getElementById('another_amount');
let pupAmount =  document.getElementById('amount');
document.body.classList.add('center');
//(circleButtons2)



// редактор карты------------------------------------------------------------------------
var nameOfCard = myform.cardcode;
var monthOfCard = myform.card_expiration;
var yearOfCard = myform.card_expiration2;
var cvvCode =  myform.card_sec;
for (var i in ['input', 'change', 'blur', 'keyup']) {
    nameOfCard.addEventListener('input', formatCardCode, false);
    monthOfCard.addEventListener('input', formatCardCode, false);
    yearOfCard.addEventListener('input', formatCardCode, false);
    cvvCode.addEventListener('input', formatCardCode, false);
    anotherAmount.addEventListener('input', formatCardCode , false);
}

const validate = (e) =>{
    //(e.target.value.length)
    let length = e.target.value.length;
    let name = e.target.name;
    let value = e.target.value;
   if(cardName.validity.valid &&
    cardType.validity.valid &&
    cardNumber.validity.valid &&
    cardEx.validity.valid &&
    cardEx2.validity.valid &&
    cardSec.validity.valid 
    ){
        formButton.classList.remove('invalid')
    }
  if(value == 0 || (name == 'cardcode' && length !== 19)||
  ((name == 'card_expiration' || name == 'card_expiration2') && length !== 2)||
  (name == 'card_sec' && length !== 3)){
    formButton.classList.add('invalid')
  }
}

cardName.addEventListener('input', (e)=>{
    validate(e);
})
cardType.addEventListener('input', (e)=>{
    validate(e);
})
cardNumber.addEventListener('input', (e)=>{
    validate(e);
})
cardEx.addEventListener('input', (e)=>{
    validate(e);
})
cardEx2.addEventListener('input', (e)=>{
    validate(e);
})
cardSec.addEventListener('input', (e)=>{
    validate(e);
})
function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    //(this.name)
    var card_Expiration = this.value.replace(/[^\d]/g, '').substring(0,2);
    var card_Expiration2 = this.value.replace(/[^\d]/g, '').substring(0,2);
    var CvvCode = this.value.replace(/[^\d]/g, '').substring(0,3);
    var input_value2 = this.value.replace(/[^\d]/g, '').substring(0,4);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    card_Expiration = card_Expiration != '' ? card_Expiration.match(/.{1,2}/g).join(' ') : '';
    card_Expiration2 = card_Expiration2 != '' ? card_Expiration2.match(/.{1,2}/g).join(' ') : '';
    CvvCode = CvvCode != '' ? CvvCode.match(/.{1,3}/g).join(' ') : '';
    input_value2= input_value2 != '' ? input_value2.match(/.{1,4}/g).join(' ') : '';
    if(this.name == 'cardcode'){
        this.value = cardCode;
    }
    if(this.name == 'card_expiration'){
        this.value = card_Expiration;
    }
    if(this.name == 'card_expiration2'){
        this.value = card_Expiration2;
    }
    if(this.name == 'card_sec'){
        this.value = CvvCode;
    }
    if(this.name == 'another_amount'){
        this.value = input_value2;
    }
   
}
// конец редактора карты------------------------------------------------------------------



// пупап----------------------------------------------------------------------------
popUpDonateButton.addEventListener('click', ()=>{
  popUpDonate.classList.remove('pop_hidden');
  document.body.classList.add('notScroll')
  popUpForm.classList.remove('pop_hidden');
})

popUpDonate.addEventListener('click', ()=>{
    popUpDonate.classList.add('pop_hidden');
    document.body.classList.remove('notScroll');
    popUpForm.classList.add('pop_hidden');
  })
// конец пупапа--------------------------------------------------------------------




btnActive.addEventListener('click', ()=>{
  btnActive.classList.toggle('menu-btn_active')
  burgerMenu.classList.toggle('bm_active');

})

function loaded() {
  preloaderEl.classList.add('hidden');
  preloaderEl.classList.remove('visible');
}
document.addEventListener("DOMContentLoaded", loaded);

//()

for (let i = 0; i < circleButtons.length; i++) {
    valueDonate[i].addEventListener('click', ()=>{
        for (let j = 0; j < circleButtons.length; j++) {
            circleButtons[j].classList.add('circle_hidden');
            circleButtons2[j].classList.add('circle_hidden');
            valueDonate[j].classList.remove('value_active')
    }
        circleButtons[i].classList.remove('circle_hidden');
        circleButtons2[i].classList.remove('circle_hidden');
        valueDonate[i].classList.add('value_active');
        anotherAmount.value = circleButtons[i].dataset.value;
    })

    circleButtons[i].addEventListener('click', ()=>{
        for (let j = 0; j < circleButtons.length; j++) {
            circleButtons[j].classList.add('circle_hidden');
            circleButtons2[j].classList.add('circle_hidden');
            valueDonate[j].classList.remove('value_active');
           
    }
        circleButtons[i].classList.remove('circle_hidden');
        circleButtons2[i].classList.remove('circle_hidden');
        valueDonate[i].classList.add('value_active');
        anotherAmount.value = circleButtons[i].dataset.value;
    })
    
}


anotherAmount.addEventListener('input',  ()=>{
    for (let i = 0; i < circleButtons.length; i++) {
     if(anotherAmount.value == circleButtons[i].dataset.value){
        for (let j = 0; j < circleButtons.length; j++) {
            circleButtons[j].classList.add('circle_hidden');
            circleButtons2[j].classList.add('circle_hidden');
            valueDonate[j].classList.remove('value_active');      
    }
        circleButtons[i].classList.remove('circle_hidden');
        circleButtons2[i].classList.remove('circle_hidden');
        valueDonate[i].classList.add('value_active');
     }
        
    }
    if(anotherAmount.value == 0){
        for (let j = 0; j < circleButtons.length; j++) {
            circleButtons[j].classList.add('circle_hidden');
            circleButtons2[j].classList.add('circle_hidden');
            valueDonate[j].classList.remove('value_active');      
    }
    }

    amount_card.value = pupAmount.value = anotherAmount.value;
})

