'use strict';

var TEXT_DEFAULT = "Чего сидишь? Порадуй котэ,купи";
var TEXT_ONE = "Печень утки разварная с артишоком.";
var TEXT_SECOND = "Головы щучьи с чесноком да свежайшая семгушка.";
var TEXT_THIRD = "Филе из циплят с трюфелями в бульоне.";
var FIRST_ID = 1;
var SECOND_ID = 2;
var THIRD_ID = 3;

var productCards = document.querySelectorAll(".product__card");

for (var i = 0; i < productCards.length; i++) {
  productCards[i].addEventListener("click", function () {
    this.classList.toggle("product__card--active");
    var cardID = this.parentNode.id;
    getMessage(cardID, FIRST_ID, TEXT_ONE);
    getMessage(cardID, SECOND_ID, TEXT_SECOND);
    getMessage(cardID, THIRD_ID, TEXT_THIRD);
  });
};

var getMessage = function (cardID, idNumber, textNumber) {
  if (cardID == idNumber) {
    var productCard = document.getElementById(idNumber);
    var textCard = productCard.querySelector(".product__offer").innerText;
    var textOffer = productCard.querySelector(".product__offer");
    if (textCard === TEXT_DEFAULT) {
      textOffer.textContent = textNumber;
    } else if (textCard === textNumber) {
      textOffer.outerHTML = '<p class="product__offer">Чего сидишь? Порадуй котэ,<span class="product__offer-mark">купи</span></p>';
      changeStyle();
    }
  }
};

var changeStyle = function () {
  var buyOffer = document.querySelectorAll(".product__offer-mark");
  for (var i = 0; i < buyOffer.length; i++) {
    buyOffer[i].addEventListener("click", function () {
      var parentElement = this.closest(".product__item");
      var firstChildElement = parentElement.querySelector(".product__card");
      firstChildElement.classList.toggle("product__card--active");
      var parentElementID = this.closest("li").id;
      getMessage(parentElementID, FIRST_ID, TEXT_ONE);
      getMessage(parentElementID, SECOND_ID, TEXT_SECOND);
      getMessage(parentElementID, THIRD_ID, TEXT_THIRD);
    })
  }
};

changeStyle();

var disableCard = function () {
  var parentElement = document.getElementById(THIRD_ID);
  var firstChildElement = parentElement.querySelector(".product__card");
  firstChildElement.classList.toggle("product__card--disabled");
  var textOffer = parentElement.querySelector(".product__offer");
  textOffer.innerText = "Печалька, с фуа-гра закончился.";
  textOffer.style.color = "#ffff66";
};

// Раскомментируй вызов функции, чтобы посмотреть на карточку товара в состоянии disabled
// disableCard();
