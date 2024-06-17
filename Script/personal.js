// SEARCH 
const search = document.querySelector(".search");
const btn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");

btn.addEventListener("click", () => {
	search.classList.toggle("active");
	input.focus();
});

// CAROUSEL
const imgs = document.getElementById("crsl-imgs");
		const leftBtn = document.getElementById("left");
		const rightBtn = document.getElementById("right");

		const img = document.querySelectorAll("#crsl-imgs .crsl");

		let idx = 0;
		let interval = setInterval(run, 5000);

		function run() {
			idx++;
			changeImage();
		}

		function changeImage() {
			if (idx > img.length - 1) {
				idx = 0;
			} else if (idx < 0) {
				idx = img.length - 1;
			}

			imgs.style.transform = `translateX(${-idx * 500}px)`;
		}

		function resetInterval() {
			clearInterval(interval);
			interval = setInterval(run, 3000);
		}

		rightBtn.addEventListener("click", () => {
			idx++;
			changeImage();
			resetInterval();
		});

		leftBtn.addEventListener("click", () => {
			idx--;
			changeImage();
			resetInterval();
		});

		// BG LOADING
		const loadText = document.querySelector(".loading-text");
			const bg = document.querySelector(".bg");

			let load = 0;

			let int = setInterval(blurring, 5);

			function blurring() {
				load++;

				if (load > 99) {
					clearInterval(int);
				}

				loadText.innerText = `${load}%`;
				loadText.style.opacity = scale(load, 0, 100, 1, 0);
				bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
			}

			function scale(num, in_min, in_max, out_min, out_max) {
				return (
					((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
				);
			}

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