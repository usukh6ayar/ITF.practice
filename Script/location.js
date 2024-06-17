// SEARCH 
const search = document.querySelector(".search");
const btn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");

btn.addEventListener("click", () => {
	search.classList.toggle("active");
	input.focus();
});

// LOCATION
const latitudeElement = document.getElementById("latitude");
			const longitudeElement = document.getElementById("longitude");
			const getLocationButton = document.getElementById("getLocationButton");

			function showPosition(position) {
				latitudeElement.textContent = position.coords.latitude;
				longitudeElement.textContent = position.coords.longitude;
			}

			function getLocation() {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(showPosition, showError);
				} else {
					alert("Geolocation is not supported by this browser.");
				}
			}

			function showError(error) {
				switch (error.code) {
					case error.PERMISSION_DENIED:
						latitudeElement.textContent = "Permission denied by user.";
						longitudeElement.textContent = "";
						break;
					case error.POSITION_UNAVAILABLE:
						latitudeElement.textContent =
							"Location information is unavailable.";
						longitudeElement.textContent = "";
						break;
					case error.TIMEOUT:
						latitudeElement.textContent = "Request to get location timed out.";
						longitudeElement.textContent = "";
						break;
					case error.UNKNOWN_ERROR:
						latitudeElement.textContent = "An unknown error occurred.";
						longitudeElement.textContent = "";
						break;
				}
			}

			getLocationButton.addEventListener("click", getLocation);

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