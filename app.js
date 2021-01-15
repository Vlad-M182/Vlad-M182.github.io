
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
		modal.classList.add('show');
		modal.classList.remove('hide');
	})
})

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
		likeBtn.classList.toggle('white');
		likeBtn.firstElementChild.firstElementChild.classList.toggle('white');
	})
})
