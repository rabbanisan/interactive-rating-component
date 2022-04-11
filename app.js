const submitBtn = document.querySelector(".submit-btn");
const cardRatingStart = document.querySelector(".card-rating-start");
const cardThankYou = document.querySelector(".card-thank-you");
const ratingBtns = document.querySelectorAll(".rating-btn");
const ratingStatus = document.querySelector(".rating-status");
const score = document.querySelector('.score');
let starsScore = 3;

submitBtn.addEventListener("click", onSubmit);
ratingBtns.forEach(btn => {
	btn.addEventListener("click", handleRatingBtnClick);
});

function onSubmit() {
	cardRatingStart.classList.add("hide");
	cardThankYou.classList.remove("hide");
	score.textContent =  starsScore;
}

function handleRatingBtnClick(event) {
	ratingBtns.forEach(btn => {
		btn.classList.remove("active");
	});

	if (event.target.classList.contains("rating-btn")) {
		event.target.classList.add("active");
	} else {
		event.target.classList.add("active");
	}

	starsScore = event.target.textContent;
}
