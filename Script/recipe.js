// SEARCH 
const search = document.querySelector(".search");
const btn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");

btn.addEventListener("click", () => {
	search.classList.toggle("active");
	input.focus();
});

// FEEDBACK
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".rating-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

const selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("rating")) {
        removeActive();
        e.target.classList.add("active");
        selectedRating = e.target.querySelector("small").innerHTML;
    }
});

sendBtn.addEventListener("click", (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br />
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve customer support</p>`;
});

function removeActive() {
    ratings.forEach((rating) => rating.classList.remove("active"));
}


// TO TOP BUTTON
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

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

// API
const APP_ID = "bb42fbe3";
const APP_KEY = "73017421a26716715acfd78a5812c75f";
let searchQuery = '';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    searchQuery = searchInput.value.trim();
    fetchRecipes();
});

searchButton.addEventListener('click', function () {
    searchQuery = searchInput.value.trim();
    fetchRecipes();
});

async function fetchRecipes() {
    const query = searchQuery ? `&q=${searchQuery}` : '';
    const API_URL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}${query}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayRecipes(data.hits);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';

        const image = document.createElement('img');
        image.src = recipe.recipe.image;
        image.alt = recipe.recipe.label;

        const recipeInfo = document.createElement('div');
        recipeInfo.className = 'recipe-card-info';

        const recipeName = document.createElement('h3');
        recipeName.textContent = recipe.recipe.label;

        const recipeCalories = document.createElement('p');
        recipeCalories.textContent = `Calories: ${Math.round(recipe.recipe.calories)}`;

        const recipeIngredients = document.createElement('p');
        recipeIngredients.textContent = `Ingredients: ${recipe.recipe.ingredientLines.join(', ')}`;

        recipeInfo.appendChild(recipeName);
        recipeInfo.appendChild(recipeCalories);
        recipeInfo.appendChild(recipeIngredients);

        recipeCard.appendChild(image);
        recipeCard.appendChild(recipeInfo);

        recipesContainer.appendChild(recipeCard);
    });
}

fetchRecipes();