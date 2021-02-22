// "use strict";
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".header-menu");
let menuListItems = document.querySelectorAll(".header-menu_btn");
let menuButton = document.querySelector(".header-menu__button");
let width = $(window).width();

if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
};
// ================================================================================
// Slider-feedback
$(document).ready(function() {
	$('.slider-feedback').slick({
		arrows: false,/*Показ стрелок*/
		dots: true,/*Показ точек*/
		adaptiveHeight: false,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 2,/*Кол-во слайдов на экране*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/
		speed: 1000,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: false,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 50,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: false,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются, а затемняются*/
		/*asNavFor: ".slider-big",*/    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 768,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 1,
			}
		},{
			breakpoint: 768.93,
			settings: {
				dots: true,
			}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		/*appendArrows:$('.content'),*/       /*Выводит стрелки в блок с заданным классом*/
		/*appendDots:$('.content'), */        /*Выводит точки в блок с заданным классом*/
	});
}); 
let widthMain = document.querySelector('.about').offsetWidth;
let widthSlider = document.querySelector(".slick-list");
let heightHeader = document.querySelector('.header').offsetHeight;
console.log(heightHeader);

if (width < 976.93) {
	document.querySelector('.main').style.padding = heightHeader + 'px 0 0 0';
}

document.getElementsByClassName('slider-feedback')[0].style.width = widthMain-140 + 'px';
if (width < 976.93) {
	document.getElementsByClassName('slider-feedback')[0].style.width = widthMain-60 + 'px';
}
// ================================================================================================================================

// ================================================================================================================================

let test = document.querySelectorAll('.header-menu__button'); // Возвращает список элементов
let lastClicked = test[0]; // Первый элемент из списка (счет начинается с нуля)

for( let i = 0; i < test.length; i++ ){
  // Цикл берет и кругами выполняет код. На каждом круге, i является конкретным числом.
  // Добавляется событие 'клик' на test[0], потом test[1], test[2]...
  test[i].addEventListener('click', function(){
    lastClicked.classList.remove('active');
    this.classList.add('active');
    // Убрали класс с предыдущего кликнутого элемента, добавили на текущий
    
    lastClicked = this; 
    addClassPage();
    // Обновили значение переменной - теперь она ссылается на текущий элемент. 
    // Чтобы на следующем клике, убрать класс уже с этого.
  });
}

function addClassPage() {
	const pageAll = document.querySelector('.info-slider__item');
	let wrapperPage = document.querySelectorAll('.info-slider .info-slider__item');
	let pageOne = document.querySelector('.info-slider__pageOne'),
		pageTwo = document.querySelector('.info-slider__pageTwo'),
		pageThree = document.querySelector('.info-slider__pageThree'),
		pageFour = document.querySelector('.info-slider__pageFour');

	if ($('.header-menu__buttonOne.active').hasClass('active')) {
		pageAll.classList.remove('active');
		wrapperPage.forEach(n => n.classList.remove('active'));
		pageOne.classList.add('active');
		// animateDisplayOne();
		console.log(1);
	};
	if ($('.header-menu__buttonTwo.active').hasClass('active')) {
		pageAll.classList.remove('active');
		wrapperPage.forEach(n => n.classList.remove('active'));
		pageTwo.classList.add('active');
		console.log(2);
	};
	if ($('.header-menu__buttonThree.active').hasClass('active')) {
		pageAll.classList.remove('active');
		wrapperPage.forEach(n => n.classList.remove('active'));
		pageThree.classList.add('active');
		console.log(3);
	};
	if ($('.header-menu__buttonFour.active').hasClass('active')) {
		pageAll.classList.remove('active');
		wrapperPage.forEach(n => n.classList.remove('active'));
		pageFour.classList.add('active');
		console.log(4);
	};
};
addClassPage();
// =================================================================================
// Filter (.PageThree)
function app() {
	const buttons = document.querySelectorAll('.portfolio-filter__item');
	const cards = document.querySelectorAll('.portfolio-galery__item-wrapper');

	function filter(category, items) {
		items.forEach((item) => {
			const isItemFiltered = !item.classList.contains(category);
			const isShowAll = category.toLowerCase() === 'all';

			// console.log(isShowAll);
			if (isItemFiltered && !isShowAll) {
				item.classList.add('animate');
			} else {
				item.classList.remove('hide');
				item.classList.remove('animate');
			};
		});
	};

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const currentCategory = button.dataset.filter;
			filter(currentCategory, cards);
			// console.log(button.dataset.filter);
		});
	});

	cards.forEach((card) => {
		card.ontransitionend = function () {
			if (card.classList.contains('animate')) {
				card.classList.add('hide');
				console.log('EndTwo');
			}
			console.log('End');
		}
	})
};
app();