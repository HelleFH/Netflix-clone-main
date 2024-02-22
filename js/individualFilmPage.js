import { createFilmCard } from "./createFilmCard.js";
import service from '/data.service.js';
import { initializeSearch } from "./search.js";

document.addEventListener("DOMContentLoaded", async () => {

  const selectedFilmId = parseInt(localStorage.getItem("selectedFilmId"), 10);

  if (selectedFilmId) {
    const filmData = await service.getFilms();

    const selectedFilm = filmData.find((film) => film.Id === selectedFilmId);

    if (selectedFilm) {
      const filmCardContainer = document.getElementById("individualPageFilms");
      const filmCardElement = createFilmCard(selectedFilm);

      filmCardContainer.appendChild(filmCardElement);

    }
    initializeSearch(filmData);
  } else {
    console.log("No selected film ID found in local storage.");
  }
  
});
