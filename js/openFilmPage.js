export function handleFilmCardClick(event) {
  const filmCard = event.target.closest('.film-card-container img');

  if (filmCard) {
    const filmId = filmCard.getAttribute('data-id');

    localStorage.setItem('selectedFilmId', filmId);

    if (!isTouchDevice()) {
      window.location.href = `./individualFilmPage.html`; 
    }
  }
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

document.getElementById('pageContent').addEventListener('click', handleFilmCardClick);
