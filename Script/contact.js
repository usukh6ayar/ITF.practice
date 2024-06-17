// SEARCH 
const search = document.querySelector(".search");
const btn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");

btn.addEventListener("click", () => {
	search.classList.toggle("active");
	input.focus();
});

// BUTTON ANIMATION
const buttons = document.querySelectorAll(".ripple");

			buttons.forEach((button) => {
				button.addEventListener("click", function (e) {
					const x = e.pageX;
					const y = e.pageY;

					const buttonTop = e.target.offTop;
					const buttonLeft = e.target.offLeft;

					const xInside = x - buttonLeft;
					const yInside = y - buttonTop;

					const circle = document.createElement("span");
					circle.classList.add("circle");
					circle.style.top = yInside + "px";
					circle.style.left = xInside + "px";

					this.appendChild(circle);
					setTimeout(() => circle.remove(), 500);
				});
			});

// INPUT ANIMATION
const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split("")
		.map(
			(letter, idx) =>
				`<span style="transition-delay:${idx * 50}ms">${letter}</span>`
		)
		.join("");
});

// PASSWORD STRENGTH BLUR 
const message = document.getElementById("message");
const background = document.getElementById("background");

message.addEventListener("input", (e) => {
const input = e.target.value;
const length = input.length;
const blurValue = 10 - length;
background.style.filter = `blur(${blurValue})`;
});


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