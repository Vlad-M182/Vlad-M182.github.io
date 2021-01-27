// add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll('.cart__add');

for(let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click', function(){
		productsCountEl.textContent = +productsCountEl.textContent + 1;
	})
}


// modal
let modal = document.querySelector('.modal');
let moreDetailsButtons = document.querySelectorAll('.more-details');
let closeBtn = document.querySelector('.btn-close');

moreDetailsButtons.forEach((btn) => {
	btn.addEventListener('click', function(){
		showModal();
	})
})

function showModal(){
	modal.classList.add('show');
	modal.classList.remove('hide');
}

function closeModal(){
	modal.classList.add('hide');
	modal.classList.remove('show');
}

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', function(e) {
	if(e.target == modal) {
		closeModal()
	}
})

let like = document.querySelectorAll('.like');

like.forEach((likeBtn) => {
	likeBtn.addEventListener('click', function() {
		this.classList.toggle('white');
		this.firstElementChild.firstElementChild.classList.toggle('white');
	})
})

let body = document.querySelector('body');
let modal2 = document.querySelector('.modal');

function showModalByScroll(){
	if(window.pageYOffset > document.body.scrollHeight/2) {
		showModal();
		window.removeEventListener('scroll', function(){
			showModal();
		})
	}
}

// window.addEventListener('scroll', showModalByScroll)

//============change product count

// let decrementBtns = document.querySelectorAll('.decrement-button');
// let incrementBtns = document.querySelectorAll('.increment-button');
// let quantityValue = document.querySelectorAll('.product-quantity');

// let minCount = 1;
// let maxCount = 5;

// quantityValue.forEach((sense,index) => {
// 	toggleButtonState(sense.value,decrementBtns[index],incrementBtns[index])
// });

// function toggleButtonState(count,decrementBtn,incrementBtn) {
// 	decrementBtn.disabled = count <= minCount;
// 	incrementBtn.disabled = count >= maxCount;
// }

// incrementBtns.forEach((Btn,index) => {
// 	Btn.addEventListener('click',function() {
// 		quantityValue[index].value = +quantityValue[index].value + 1;
// 		toggleButtonState(quantityValue[index].value,decrementBtns[index],incrementBtns[index]);
// 	})
// });

// decrementBtns.forEach((Btn,index) => {
// 	Btn.addEventListener('click',function() {
// 		quantityValue[index].value = +quantityValue[index].value - 1;
// 		toggleButtonState(quantityValue[index].value,decrementBtns[index],incrementBtns[index]);
// 	})
// })


//=============================================

let decrementBtns = document.querySelectorAll('.decrement-button');
let incrementBtns = document.querySelectorAll('.increment-button');
let quantityValue = document.querySelectorAll('.product-quantity');

function Counter(incrementBtn,decrementBtn,inputField,minCount = 1,maxCount = 5) {
	this.domRefs = {
		incrementBtn,
		decrementBtn,
		inputField,
	}

	this.toggleButtonState = function () {
		let count = this.domRefs.inputField.value;
		this.domRefs.decrementBtn.disabled = count <= minCount;
		this.domRefs.incrementBtn.disabled = count >= maxCount;
	}
	this.toggleButtonState();

	this.increment = function() {
		let currentCount = +this.domRefs.inputField.value;
		let nextCount = currentCount + 1;
		this.domRefs.inputField.value = nextCount;

		this.toggleButtonState();
	}
	this.decrement = function() {
		let currentCount = +this.domRefs.inputField.value;
		let nextCount = currentCount - 1;
		this.domRefs.inputField.value = nextCount;

		this.toggleButtonState();
	}

	this.domRefs.incrementBtn.addEventListener('click',this.increment.bind(this));
	this.domRefs.decrementBtn.addEventListener('click',this.decrement.bind(this));
}

quantityValue.forEach((value,index) => {
	const counter = new Counter(incrementBtns[index],decrementBtns[index],quantityValue[index]);
})


let swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 });