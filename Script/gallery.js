// SEARCH 
const search = document.querySelector(".search");
const btn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");

btn.addEventListener("click", () => {
	search.classList.toggle("active");
	input.focus();
});

// GALLERY
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
	activeSlide++;

	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}
	setBgToBody();
	setActiveSlide();
});

leftBtn.addEventListener("click", () => {
	activeSlide--;

	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}
	setBgToBody();
	setActiveSlide();
});

setBgToBody();

function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
	slides.forEach((slide) => slide.classList.remove("active"));
	slides[activeSlide].classList.add("active");
}

// LIKE
const loveMe = document.querySelector(".loveme");
		const times = document.querySelector("#times");

		let clickTime = 0;
		let timesClicked = 0;

		loveMe.addEventListener("click", (e) => {
			if (clickTime === 0) {
				clickTime = new Date().getTime();
			} else {
				if (new Date().getTime() - clickTime < 800) {
					createHeart(e);
					clickTime = 0;
				} else {
					clickTime = new Date().getTime();
				}
			}
		});

const createHeart = (e) => {
const heart = document.createElement("i");
heart.classList.add("fas");
heart.classList.add("fa-heart");

const x = e.clientX;
const y = e.clientY;

const leftOffset = e.target.offsetLeft;
const topOffset = e.target.offsetTop;

const xInside = x - leftOffset;
const yInside = y - topOffset;

heart.style.top = `${yInside}px`;
heart.style.left = `${xInside}px`;

loveMe.appendChild(heart);

timesClicked++;
times.textContent = timesClicked;

setTimeout(() => heart.remove(), 3000);
};

// STICKY NAV
const nav = document.querySelector("header");
window.addEventListener("scroll", fixnav);

function fixnav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}